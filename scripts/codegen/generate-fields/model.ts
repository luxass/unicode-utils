import { readFile } from "node:fs/promises";
import path from "node:path";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createXai } from "@ai-sdk/xai";
import type { LanguageModel } from "ai";
import { generateText, Output, stepCountIs, tool } from "ai";
import { z } from "zod";
import { fetchUnicodeReport, normalizeReportUrl } from "./report-cache";
import { loadSkill, renderSkillDefinitions } from "./skill";
import type { GenerateFieldsResult, ProviderDefaults } from "./types";
import {
  parseNumberedHeadingLines,
  validateAndNormalizeCandidateFields,
} from "./validation";

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
    prompt.trim().replace("{{SKILL_DEFINITIONS}}", await renderSkillDefinitions())
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
      tools: {
        load_skill: tool({
          description:
            "Load the detailed playbook for a specific UCD header pattern. Call this after identifying which pattern the current header matches. You MUST call this before producing a final answer (unless returning an empty fields array).",
          inputSchema: z.object({
            name: z.string().describe("The skill name to load."),
          }),
          execute: async ({ name }) => loadSkill(name),
        }),
        validate_fields: tool({
          description:
            "Validate and normalize candidate fields. Call this before final output. If issues are returned, fix and call again.",
          inputSchema: z.object({
            fields: z.array(
              z.object({
                name: z.string(),
                type: z.string(),
                description: z.string(),
                source: z.string(),
              }),
            ),
          }),
          execute: async ({ fields }) => {
            const { normalizedFields, violations } = validateAndNormalizeCandidateFields(
              fields,
              headingLines,
              fetchedUrls,
            );
            return {
              ok: violations.length === 0,
              violations,
              normalizedFields,
            };
          },
        }),
        fetch_unicode_report: tool({
          description: "Fetch a Unicode report or specification page from unicode.org",
          inputSchema: z.object({
            url: z.string().regex(/^https?:\/\/(www\.)?unicode\.org\/reports\/(.*)$/m),
          }),
          execute: async ({ url }) => {
            if (
              !url.startsWith("http://www.unicode.org/reports") &&
              !url.startsWith("https://www.unicode.org/reports") &&
              !url.startsWith("http://unicode.org/reports") &&
              !url.startsWith("https://unicode.org/reports")
            ) {
              return "Error: Only unicode.org/reports/ URLs are permitted.";
            }

            const normalizedUrl = normalizeReportUrl(url);
            if (fetchedUrls.has(normalizedUrl)) {
              return "Error: This URL has already been fetched. Do not fetch the same URL twice.";
            }
            fetchedUrls.add(normalizedUrl);

            const text = await fetchUnicodeReport(normalizedUrl);
            const maxChars = 12_000;
            return text.length > maxChars
              ? `${text.slice(0, maxChars)}\n\n[truncated — content exceeded ${maxChars} characters]`
              : text;
          },
        }),
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
