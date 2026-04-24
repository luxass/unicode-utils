import { buildFilePath, isRateLimitError } from "./utils";
import { generateFields } from "./model";
import { renderFile } from "./render";
import type { Field } from "./types";
import type { ProcessedFile, ProcessFileOptions } from "./types";

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

export async function processFileForVersion(
  full: string,
  short: string,
  relPath: string,
  options: ProcessFileOptions,
): Promise<ProcessedFile> {
  const apiPath = buildFilePath(full, relPath);
  const fileExplorerUrl = `https://ucdjs.dev/file-explorer/v/${apiPath}`;
  const unicodeSourceUrl = `https://unicode.org/Public/${apiPath}`;

  const content = await options.fetchFile(apiPath);
  if (typeof content !== "string") {
    throw new TypeError(`expected string content for ${apiPath}, got ${typeof content}`);
  }

  const numberedHeading = extractNumberedHeading(content);
  let result;
  let usedReasoningPass = false;
  let modelId = options.fastModelId;

  try {
    result = await options.runAi(() => generateFields(numberedHeading, options.fastModel), {
      modelId: options.fastModelId,
      shortVersion: short,
      relPath,
    });
  } catch (fastError) {
    if (isRateLimitError(fastError)) {
      throw new Error(
        `${options.fastModelId} rate limited for ${relPath}: ${String(fastError)}`,
      );
    }

    console.warn(
      `[v${short}] fast pass failed for ${relPath}; retrying with ${options.reasoningModelId}`,
    );
    try {
      result = await options.runAi(
        () => generateFields(numberedHeading, options.reasoningModel),
        {
          modelId: options.reasoningModelId,
          shortVersion: short,
          relPath,
        },
      );
      usedReasoningPass = true;
      modelId = options.reasoningModelId;
    } catch (reasoningError) {
      throw new Error(
        `both fast and reasoning passes failed for ${relPath}\nfast: ${String(fastError)}\nreasoning: ${String(reasoningError)}`,
      );
    }
  }

  if (
    !usedReasoningPass &&
    needsReasoningPass(result.fields, result.confidence, options.confidenceThreshold)
  ) {
    console.log(
      `[v${short}] ↻ ${relPath} conf=${result.confidence.toFixed(2)} — retry with ${options.reasoningModelId}`,
    );
    try {
      const retry = await options.runAi(
        () => generateFields(numberedHeading, options.reasoningModel),
        {
          modelId: options.reasoningModelId,
          shortVersion: short,
          relPath,
        },
      );
      if (retry.confidence >= result.confidence) {
        result = retry;
        usedReasoningPass = true;
        modelId = options.reasoningModelId;
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
