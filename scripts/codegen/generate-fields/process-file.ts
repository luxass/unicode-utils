import { type Field, generateFields, renderFile } from "../fields";
import { buildFilePath, unwrap } from "../utils";
import type { ProcessedFile, RuntimeContext } from "./types";

function needsReasoningPass(fields: Field[], confidence: number, threshold: number): boolean {
  if (confidence < threshold) return true;
  if (fields.length === 0) return true;
  return false;
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
  let result = await runtime.aiLimit.run(() => generateFields(numberedHeading, runtime.fastModel));
  let usedReasoningPass = false;
  let modelId = runtime.fastModelId;

  if (needsReasoningPass(result.fields, result.confidence, runtime.confidenceThreshold)) {
    console.log(`[v${short}] ↻ ${relPath} conf=${result.confidence.toFixed(2)} — retry with ${runtime.reasoningModelId}`);
    const retry = await runtime.aiLimit.run(() => generateFields(numberedHeading, runtime.reasoningModel));
    if (retry.confidence >= result.confidence) {
      result = retry;
      usedReasoningPass = true;
      modelId = runtime.reasoningModelId;
    }
  }

  const reportSources = [...new Set(
    result.fields.map((field) => field.source).filter((source) => source.startsWith("report:")),
  )];

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
