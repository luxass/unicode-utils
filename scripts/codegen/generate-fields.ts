import path, { join } from "node:path";
import process from "node:process";
import { parseArgs } from "node:util";

import { createUCDClient } from "@ucdjs/client";

import { buildModel, PROVIDER_DEFAULTS } from "./generate-fields/model";
import { generatePackageExports } from "./generate-fields/exports";
import { processVersion } from "./generate-fields/process-version";
import type { ProcessVersionOptions } from "./generate-fields/types";
import {
  isRateLimitError,
  Limiter,
  RateLimitCooldown,
  sleep,
  unwrap,
} from "./generate-fields/utils";

const VERSION_WORKERS = 4;
const FILE_FETCH_WORKERS = 20;
const AI_WORKERS = 10;
const AI_RATE_LIMIT_RETRIES = 6;
const OUTPUT_DIR = join(path.resolve(import.meta.dirname, "../.."), "packages/fields/src");

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

  const confidenceThreshold = Number(values["confidence-threshold"]);
  if (!Number.isFinite(confidenceThreshold) || confidenceThreshold < 0 || confidenceThreshold > 1) {
    throw new Error(
      `--confidence-threshold must be a number between 0 and 1 (received: ${values["confidence-threshold"]})`,
    );
  }

  return {
    all: values.all,
    versions: values.version ?? [],
    provider: values.provider,
    fastModelId: values.model ?? defaults.fast,
    reasoningModelId: values["reasoning-model"] ?? defaults.reasoning,
    confidenceThreshold,
  };
}

async function run() {
  const config = parseConfig();
  const client = await createUCDClient("https://api.ucdjs.dev");
  const versions = config.all
    ? (await unwrap(client.versions.list())).map((entry) => entry.version)
    : config.versions;

  if (versions.length === 0) {
    throw new Error("Pass at least one --version <v> or --all");
  }

  if (config.all) {
    console.log(`Processing all ${versions.length} versions`);
  }
  console.log(
    `using provider=${config.provider} fast=${config.fastModelId} reasoning=${config.reasoningModelId} threshold=${config.confidenceThreshold}`,
  );

  const fetchLimit = new Limiter(FILE_FETCH_WORKERS);
  const aiLimit = new Limiter(AI_WORKERS);
  const aiRateLimitCooldown = new RateLimitCooldown(10_000, 60_000);

  const versionOptions: ProcessVersionOptions = {
    outputDir: OUTPUT_DIR,
    confidenceThreshold: config.confidenceThreshold,
    fastModelId: config.fastModelId,
    reasoningModelId: config.reasoningModelId,
    fastModel: buildModel(config.provider, config.fastModelId),
    reasoningModel: buildModel(config.provider, config.reasoningModelId),
    fetchFileTree: (fullVersion) =>
      fetchLimit.run(() => unwrap(client.versions.getFileTree(fullVersion))),
    fetchFile: (apiPath) => fetchLimit.run(() => unwrap(client.files.get(apiPath))),
    runAi: async (task, context) => {
      for (let attempt = 1; attempt <= AI_RATE_LIMIT_RETRIES; attempt++) {
        try {
          await aiRateLimitCooldown.wait();
          const result = await aiLimit.run(async () => {
            await aiRateLimitCooldown.wait();
            return task();
          });
          aiRateLimitCooldown.success();
          return result;
        } catch (error) {
          if (!isRateLimitError(error) || attempt === AI_RATE_LIMIT_RETRIES) {
            throw error;
          }

          const delayMs = aiRateLimitCooldown.hit();
          console.warn(
            `[v${context.shortVersion}] rate limited by ${context.modelId} for ${context.relPath}; retry ${attempt + 1}/${AI_RATE_LIMIT_RETRIES} after ${Math.ceil(delayMs / 1000)}s`,
          );
          await sleep(delayMs);
        }
      }

      throw new Error(`unreachable rate-limit retry state for ${context.relPath}`);
    },
  };

  const workers = Math.min(VERSION_WORKERS, versions.length);
  console.log(`processing versions with concurrency=${workers}`);

  async function runWorker(workerIndex: number) {
    for (let index = workerIndex; index < versions.length; index += workers) {
      await processVersion(versions[index]!, versionOptions);
    }
  }

  await Promise.all(Array.from({ length: workers }, (_, workerIndex) => runWorker(workerIndex)));
  console.log("all versions processed; updating package exports");
  await generatePackageExports(OUTPUT_DIR);
  console.log("updated index.ts and package.json exports");
}

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
