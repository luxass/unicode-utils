// Generates packages/fields/src/v{version}.ts by fetching UCD files from
// api.ucdjs.dev (via @ucdjs/client) and running each file's header through
// an LLM.
//
// Usage:
//   OPENAI_API_KEY=... pnpm --filter @unicode-utils/scripts run generate:fields --version 16
//   OPENAI_API_KEY=... pnpm --filter @unicode-utils/scripts run generate:fields --version 15.1 --version 16
//   OPENAI_API_KEY=... pnpm --filter @unicode-utils/scripts run generate:fields --all
//
// Flags:
//   --provider <openai|google|xai>   defaults to "openai"
//   --model <id>                     fast primary model; provider default otherwise
//   --reasoning-model <id>           optional reasoning model for a second pass
//                                    when the primary pass is low-confidence
//   --confidence-threshold <n>       0-1, below this triggers reasoning retry (default 0.7)
//   --version <v> (repeatable) | --all
//
// Env:
//   OPENAI_API_KEY               — required when --provider openai
//   GOOGLE_GENERATIVE_AI_API_KEY — required when --provider google
//   XAI_API_KEY                  — required when --provider xai
//   AI_CONCURRENCY               — optional, defaults to 10
//   UCDJS_CONCURRENCY            — optional, defaults to 20

import { writeFile } from "node:fs/promises";
import path, { join } from "node:path";
import { parseArgs } from "node:util";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createXai } from "@ai-sdk/xai";
import { createUCDClient } from "@ucdjs/client";
import { RawDataFile } from "@unicode-utils/parser";
import type { LanguageModel } from "ai";
import { bundleFields, type Field, generateFields, generatePackageExports, renderFile, type RenderedFile } from "./fields";
import { buildFilePath, collectTxtPaths, Limiter, normalizeVersion, type TreeNode, unwrap } from "./utils";

const { values } = parseArgs({
  args: process.argv.slice(2),
  options: {
    version: { type: "string", short: "v", multiple: true },
    all: { type: "boolean", default: false },
    provider: { type: "string", short: "p", default: "openai" },
    model: { type: "string", short: "m" },
    "reasoning-model": { type: "string" },
    "confidence-threshold": { type: "string", default: "0.7" },
  },
  strict: true,
  allowPositionals: false,
});

interface ProviderDefaults {
  fast: string;
  reasoning: string;
}

const PROVIDER_DEFAULTS: Record<string, ProviderDefaults> = {
  openai: { fast: "gpt-4o-mini", reasoning: "o3-mini" },
  google: { fast: "gemini-2.0-flash", reasoning: "gemini-2.5-pro" },
  xai: { fast: "grok-4-1-fast-non-reasoning", reasoning: "grok-4-1-fast-reasoning" },
};

function buildModel(provider: string, id: string): LanguageModel {
  switch (provider) {
    case "openai": return createOpenAI()(id);
    case "google": return createGoogleGenerativeAI()(id);
    case "xai": return createXai()(id);
    default: throw new Error(`unknown --provider: ${provider}`);
  }
}

const defaults = PROVIDER_DEFAULTS[values.provider];
if (defaults == null) throw new Error(`unknown --provider: ${values.provider}`);

const fastModelId = values.model ?? defaults.fast;
const reasoningModelId = values["reasoning-model"] ?? defaults.reasoning;
const confidenceThreshold = Number(values["confidence-threshold"]);

const fastModel = buildModel(values.provider, fastModelId);
const reasoningModel = buildModel(values.provider, reasoningModelId);

const outputDir = join(path.resolve(import.meta.dirname, "../.."), "packages/fields/src");
const client = await createUCDClient("https://api.ucdjs.dev");
const fetchLimit = new Limiter(Number(process.env.UCDJS_CONCURRENCY ?? 20));
const aiLimit = new Limiter(Number(process.env.AI_CONCURRENCY ?? 10));
console.log(`using provider=${values.provider} fast=${fastModelId} reasoning=${reasoningModelId} threshold=${confidenceThreshold}`);

let versions: string[];
if (values.all) {
  versions = (await unwrap(client.versions.list())).map((v) => v.version);
  console.log(`Processing all ${versions.length} versions`);
} else if (values.version != null && values.version.length > 0) {
  versions = values.version;
} else {
  throw new Error("Pass at least one --version <v> or --all");
}

interface ReviewEntry {
  relPath: string;
  usedReasoningPass: boolean;
  modelId: string;
  confidence: number;
  notes: string;
  fieldCount: number;
  reportUrls: string[];
}

function needsReasoningPass(fields: Field[], confidence: number): boolean {
  if (confidence < confidenceThreshold) return true;
  if (fields.length === 0) return true;
  return false;
}

await Promise.all(versions.map(async (inputVersion) => {
  const { full, short } = normalizeVersion(inputVersion);
  console.log(`[v${short}] fetching file tree`);

  const tree = await fetchLimit.run(() => unwrap(client.versions.getFileTree(full)));
  const relativePaths = collectTxtPaths(tree as readonly TreeNode[]);
  console.log(`[v${short}] ${relativePaths.length} files`);

  const reviewEntries: ReviewEntry[] = [];

  const settled = await Promise.allSettled(relativePaths.map(async (relPath): Promise<RenderedFile> => {
    const apiPath = buildFilePath(full, relPath);
    const fileExplorerUrl = `https://ucdjs.dev/file-explorer/v/${apiPath}`;
    const unicodeSourceUrl = `https://unicode.org/Public/${apiPath}`;

    const content = await fetchLimit.run(() => unwrap(client.files.get(apiPath)));
    if (typeof content !== "string") {
      throw new TypeError(`expected string content for ${apiPath}, got ${typeof content}`);
    }

    const datafile = new RawDataFile(content);
    const numberedHeading = datafile.heading
      .split("\n")
      .map((line, i) => `L${i + 1}: ${line}`)
      .join("\n");

    let result = await aiLimit.run(() => generateFields(numberedHeading, fastModel));
    let usedReasoning = false;
    let usedModelId = fastModelId;

    if (needsReasoningPass(result.fields, result.confidence)) {
      console.log(`[v${short}] ↻ ${relPath} conf=${result.confidence.toFixed(2)} — retry with ${reasoningModelId}`);
      const retry = await aiLimit.run(() => generateFields(numberedHeading, reasoningModel));
      // Keep the retry only if it's actually more confident.
      if (retry.confidence >= result.confidence) {
        result = retry;
        usedReasoning = true;
        usedModelId = reasoningModelId;
      }
    }

    const reportSources = [...new Set(
      result.fields.map((f) => f.source).filter((s) => s.startsWith("report:")),
    )];

    reviewEntries.push({
      relPath,
      usedReasoningPass: usedReasoning,
      modelId: usedModelId,
      confidence: result.confidence,
      notes: result.notes,
      fieldCount: result.fields.length,
      reportUrls: reportSources.map((s) => s.slice("report:".length)),
    });

    const marker = reportSources.length > 0 ? ` (via ${reportSources.join(", ")})` : "";
    console.log(`[v${short}] ✓ ${relPath} conf=${result.confidence.toFixed(2)}${marker}`);

    return renderFile({
      relPath,
      shortVersion: short,
      fileExplorerUrl,
      unicodeSourceUrl,
      fields: result.fields,
      confidence: result.confidence,
      modelId: usedModelId,
    });
  }));

  const rendered: RenderedFile[] = [];
  for (let i = 0; i < settled.length; i++) {
    const result = settled[i]!;
    if (result.status === "fulfilled") {
      rendered.push(result.value);
    } else {
      console.error(`[v${short}] failed ${relativePaths[i]}: ${String(result.reason)}`);
    }
  }

  const outPath = join(outputDir, `v${short}.ts`);
  await writeFile(outPath, bundleFields(short, rendered), "utf-8");
  console.log(`[v${short}] wrote ${outPath}`);

  reviewEntries.sort((a, b) => a.confidence - b.confidence);
  const reviewPath = join(outputDir, `v${short}.review.json`);
  await writeFile(reviewPath, `${JSON.stringify(reviewEntries, null, 2)}\n`, "utf-8");
  const lowConf = reviewEntries.filter((e) => e.confidence < confidenceThreshold).length;
  console.log(`[v${short}] wrote ${reviewPath} (${lowConf} low-confidence of ${reviewEntries.length})`);
}));

await generatePackageExports(outputDir);
console.log("updated index.ts and package.json exports");