import path, { join } from "node:path";
import process from "node:process";
import { parseArgs } from "node:util";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
import { createXai } from "@ai-sdk/xai";
import { createUCDClient } from "@ucdjs/client";
import type { LanguageModel } from "ai";
import { Limiter, unwrap } from "../utils";
import type { ProviderDefaults, RuntimeContext } from "./types";

const PROVIDER_DEFAULTS: Record<string, ProviderDefaults> = {
  openai: { fast: "gpt-4o-mini", reasoning: "o3-mini" },
  google: { fast: "gemini-2.0-flash", reasoning: "gemini-2.5-pro" },
  xai: { fast: "grok-4-1-fast-non-reasoning", reasoning: "grok-4-1-fast-reasoning" },
};

function parseConcurrency(name: string, fallback: number): number {
  const raw = process.env[name];
  if (raw == null || raw.trim() === "") return fallback;
  const value = Number(raw);
  if (!Number.isFinite(value) || value < 1) {
    throw new Error(`${name} must be a positive number (received: ${raw})`);
  }
  return Math.floor(value);
}

function buildModel(provider: string, modelId: string): LanguageModel {
  switch (provider) {
    case "openai": return createOpenAI()(modelId);
    case "google": return createGoogleGenerativeAI()(modelId);
    case "xai": return createXai()(modelId);
    default: throw new Error(`unknown --provider: ${provider}`);
  }
}

function parseConfig() {
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

  const defaults = PROVIDER_DEFAULTS[values.provider];
  if (defaults == null) {
    throw new Error(`unknown --provider: ${values.provider}`);
  }

  const fastModelId = values.model ?? defaults.fast;
  const reasoningModelId = values["reasoning-model"] ?? defaults.reasoning;
  const confidenceThreshold = Number(values["confidence-threshold"]);
  if (!Number.isFinite(confidenceThreshold) || confidenceThreshold < 0 || confidenceThreshold > 1) {
    throw new Error(`--confidence-threshold must be a number between 0 and 1 (received: ${values["confidence-threshold"]})`);
  }

  return {
    all: values.all,
    versions: values.version ?? [],
    provider: values.provider,
    fastModelId,
    reasoningModelId,
    confidenceThreshold,
  };
}

export async function createRuntime(): Promise<RuntimeContext> {
  const config = parseConfig();
  const client = await createUCDClient("https://api.ucdjs.dev");

  let versions: string[];
  if (config.all) {
    versions = (await unwrap(client.versions.list())).map((entry) => entry.version);
    console.log(`Processing all ${versions.length} versions`);
  } else if (config.versions.length > 0) {
    versions = config.versions;
  } else {
    throw new Error("Pass at least one --version <v> or --all");
  }

  const versionConcurrency = parseConcurrency("VERSION_CONCURRENCY", 4);
  const fileTaskConcurrency = parseConcurrency("FILE_TASK_CONCURRENCY", 8);
  const fetchConcurrency = parseConcurrency("UCDJS_CONCURRENCY", 20);
  const aiConcurrency = parseConcurrency("AI_CONCURRENCY", 10);

  const runtime: RuntimeContext = {
    versions,
    outputDir: join(path.resolve(import.meta.dirname, "../../.."), "packages/fields/src"),
    versionConcurrency,
    fileTaskConcurrency,
    confidenceThreshold: config.confidenceThreshold,
    fastModelId: config.fastModelId,
    reasoningModelId: config.reasoningModelId,
    fastModel: buildModel(config.provider, config.fastModelId),
    reasoningModel: buildModel(config.provider, config.reasoningModelId),
    client,
    fetchLimit: new Limiter(fetchConcurrency),
    aiLimit: new Limiter(aiConcurrency),
  };

  console.log(
    `using provider=${config.provider} fast=${runtime.fastModelId} reasoning=${runtime.reasoningModelId} threshold=${runtime.confidenceThreshold}`,
  );
  console.log(
    `limits version=${versionConcurrency} file=${fileTaskConcurrency} ai=${aiConcurrency} fetch=${fetchConcurrency}`,
  );
  return runtime;
}
