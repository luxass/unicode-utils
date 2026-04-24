import { type Field, generateFields, renderFile } from "../fields";
import { buildFilePath, isRateLimitError, sleep, unwrap } from "../utils";
import type { ProcessedFile, RuntimeContext } from "./types";

function needsReasoningPass(fields: Field[], confidence: number, threshold: number): boolean {
  if (fields.length === 0) return false;
  return confidence < threshold;
}

function extractNumberedHeading(content: string): string {
  const lines = content.split("\n");
  let endIndex = lines.length;

  for (let index = 0; index < lines.length; index++) {
    const line = lines[index]!.trim();
    if (line !== "" && !line.startsWith("#")) {
      endIndex = index;
      break;
    }
  }

  while (endIndex > 0 && lines[endIndex - 1]!.trim() === "") {
    endIndex--;
  }

  const heading = lines.slice(0, endIndex).join("\n");
  if (heading === "") {
    return "";
  }
  return heading
    .split("\n")
    .map((line, index) => `L${index + 1}: ${line}`)
    .join("\n");
}

async function generateFieldsWithRateLimitRetry(
  heading: string,
  runtime: RuntimeContext,
  model: RuntimeContext["fastModel"],
  modelId: string,
  short: string,
  relPath: string,
) {
  for (let attempt = 1; attempt <= runtime.aiRateLimitRetries; attempt++) {
    try {
      await runtime.aiRateLimitCooldown.wait();
      const result = await runtime.aiLimit.run(async () => {
        await runtime.aiRateLimitCooldown.wait();
        return generateFields(heading, model);
      });
      runtime.aiRateLimitCooldown.success();
      return result;
    } catch (error) {
      if (!isRateLimitError(error) || attempt === runtime.aiRateLimitRetries) {
        throw error;
      }

      const delayMs = runtime.aiRateLimitCooldown.hit();
      console.warn(
        `[v${short}] rate limited by ${modelId} for ${relPath}; retry ${attempt + 1}/${runtime.aiRateLimitRetries} after ${Math.ceil(delayMs / 1000)}s`,
      );
      await sleep(delayMs);
    }
  }

  throw new Error(`unreachable rate-limit retry state for ${relPath}`);
}

export async function processFileForVersion(
  full: string,
  short: string,
  relPath: string,
  runtime: RuntimeContext,
): Promise<ProcessedFile> {
  const apiPath = buildFilePath(full, relPath);
  const fileExplorerUrl = `https://ucdjs.dev/file-explorer/v/${apiPath}`;
  const unicodeSourceUrl = `https://unicode.org/Public/${apiPath}`;

  const content = await runtime.fetchLimit.run(() => unwrap(runtime.client.files.get(apiPath)));
  if (typeof content !== "string") {
    throw new TypeError(`expected string content for ${apiPath}, got ${typeof content}`);
  }

  const numberedHeading = extractNumberedHeading(content);
  let result;
  let usedReasoningPass = false;
  let modelId = runtime.fastModelId;

  try {
    result = await generateFieldsWithRateLimitRetry(
      numberedHeading,
      runtime,
      runtime.fastModel,
      runtime.fastModelId,
      short,
      relPath,
    );
  } catch (fastError) {
    if (isRateLimitError(fastError)) {
      throw new Error(
        `${runtime.fastModelId} rate limited after ${runtime.aiRateLimitRetries} attempts for ${relPath}: ${String(fastError)}`,
      );
    }

    console.warn(
      `[v${short}] fast pass failed for ${relPath}; retrying with ${runtime.reasoningModelId}`,
    );
    try {
      result = await generateFieldsWithRateLimitRetry(
        numberedHeading,
        runtime,
        runtime.reasoningModel,
        runtime.reasoningModelId,
        short,
        relPath,
      );
      usedReasoningPass = true;
      modelId = runtime.reasoningModelId;
    } catch (reasoningError) {
      throw new Error(
        `both fast and reasoning passes failed for ${relPath}\nfast: ${String(fastError)}\nreasoning: ${String(reasoningError)}`,
      );
    }
  }

  if (
    !usedReasoningPass &&
    needsReasoningPass(result.fields, result.confidence, runtime.confidenceThreshold)
  ) {
    console.log(
      `[v${short}] ↻ ${relPath} conf=${result.confidence.toFixed(2)} — retry with ${runtime.reasoningModelId}`,
    );
    try {
      const retry = await generateFieldsWithRateLimitRetry(
        numberedHeading,
        runtime,
        runtime.reasoningModel,
        runtime.reasoningModelId,
        short,
        relPath,
      );
      if (retry.confidence >= result.confidence) {
        result = retry;
        usedReasoningPass = true;
        modelId = runtime.reasoningModelId;
      }
    } catch (reasoningError) {
      console.warn(
        `[v${short}] reasoning retry failed for ${relPath}; keeping fast result (${String(reasoningError)})`,
      );
    }
  }

  const reportSources = [
    ...new Set(
      result.fields.map((field) => field.source).filter((source) => source.startsWith("report:")),
    ),
  ];

  const marker = reportSources.length > 0 ? ` (via ${reportSources.join(", ")})` : "";
  console.log(`[v${short}] ✓ ${relPath} conf=${result.confidence.toFixed(2)}${marker}`);

  return {
    reviewEntry: {
      relPath,
      usedReasoningPass,
      modelId,
      confidence: result.confidence,
      notes: result.notes,
      fieldCount: result.fields.length,
      reportUrls: reportSources.map((source) => source.slice("report:".length)),
    },
    renderedFile: renderFile({
      relPath,
      shortVersion: short,
      fileExplorerUrl,
      unicodeSourceUrl,
      fields: result.fields,
      confidence: result.confidence,
      modelId,
    }),
  };
}
