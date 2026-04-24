import { readFile } from "node:fs/promises";
import path from "node:path";

import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createXai } from "@ai-sdk/xai";
import type { LanguageModel } from "ai";
import { generateText, Output, stepCountIs } from "ai";
import { z } from "zod";

import { renderSkillDefinitions } from "./skill";
import { LOAD_SKILL_TOOL, FETCH_UNICODE_REPORT_TOOL, VALIDATE_FIELDS_TOOL } from "./tools";
import type { GenerateFieldsResult, ProviderDefaults } from "./types";
import { parseNumberedHeadingLines, validateAndNormalizeCandidateFields } from "./validation";

export const PROVIDER_DEFAULTS: Record<string, ProviderDefaults> = {
  openai: { fast: "gpt-4o-mini", reasoning: "o3-mini" },
  google: { fast: "gemini-2.0-flash", reasoning: "gemini-2.5-pro" },
  xai: { fast: "grok-4-1-fast-non-reasoning", reasoning: "grok-4-1-fast-reasoning" },
};

const MAX_VALIDATION_ATTEMPTS = 3;
let systemPromptPromise: Promise<string> | undefined;

export function buildModel(provider: string, modelId: string): LanguageModel {
  switch (provider) {
    case "openai":
      return createOpenAI()(modelId);
    case "google":
      return createGoogleGenerativeAI()(modelId);
    case "xai":
      return createXai()(modelId);
    default:
      throw new Error(`unknown --provider: ${provider}`);
  }
}

function loadSystemPrompt(): Promise<string> {
  systemPromptPromise ??= readFile(
    path.join(import.meta.dirname, "system-prompt.md"),
    "utf-8",
  ).then(async (prompt) =>
    prompt.trim().replace("{{SKILL_DEFINITIONS}}", await renderSkillDefinitions()),
  );
  return systemPromptPromise;
}

export async function generateFields(
  heading: string,
  model: LanguageModel,
): Promise<GenerateFieldsResult> {
  const fetchedUrls = new Set<string>();
  const headingLines = parseNumberedHeadingLines(heading);
  const systemPrompt = await loadSystemPrompt();
  let lastViolations: string[] = [];
  let lastConfidence = 0;
  let lastNotes = "";

  for (let attempt = 1; attempt <= MAX_VALIDATION_ATTEMPTS; attempt++) {
    const prompt =
      attempt === 1
        ? heading
        : `${heading}

# Validation feedback from previous attempt
${lastViolations.map((violation) => `- ${violation}`).join("\n")}

Fix the issues above. Call validate_fields before final output and return corrected fields.`;

    const result = await generateText({
      model,
      system: systemPrompt,
      prompt,
      temperature: 0,
      maxRetries: 2,
      stopWhen: stepCountIs(20),
      experimental_context: {
        fetchedUrls,
        headingLines,
      },
      tools: {
        load_skill: LOAD_SKILL_TOOL,
        validate_fields: VALIDATE_FIELDS_TOOL,
        fetch_unicode_report: FETCH_UNICODE_REPORT_TOOL,
      },
      output: Output.object({
        schema: z.object({
          fields: z.array(
            z.object({
              name: z.string(),
              type: z.string(),
              description: z.string(),
              source: z
                .string()
                .describe(
                  "Origin: 'header:L<n>', 'header:L<start>-L<end>', or 'report:<url>'. No other values permitted.",
                ),
            }),
          ),
          confidence: z
            .number()
            .min(0)
            .max(1)
            .describe("0-1 certainty score per the rubric in the system prompt."),
          notes: z.string().describe("Brief explanation of reasoning and any uncertainty."),
        }),
      }),
    });

    const { normalizedFields, violations } = validateAndNormalizeCandidateFields(
      result.output.fields,
      headingLines,
      fetchedUrls,
    );

    if (violations.length === 0) {
      return {
        fields: normalizedFields,
        confidence: result.output.confidence,
        notes: result.output.notes,
      };
    }

    lastViolations = violations;
    lastConfidence = result.output.confidence;
    lastNotes = result.output.notes;
    if (attempt < MAX_VALIDATION_ATTEMPTS) {
      console.warn(
        `validation failed (attempt ${attempt}/${MAX_VALIDATION_ATTEMPTS}); retrying with feedback`,
      );
    }
  }

  throw new Error(
    `source validation failed after ${MAX_VALIDATION_ATTEMPTS} attempts:\n  - ${lastViolations.join("\n  - ")}\n  - last confidence=${lastConfidence.toFixed(2)} notes=${lastNotes}`,
  );
}
