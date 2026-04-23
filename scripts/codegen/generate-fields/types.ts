import type { LanguageModel } from "ai";
import type { createUCDClient } from "@ucdjs/client";
import type { RenderedFile } from "../fields";
import type { Limiter } from "../utils";

export interface ProviderDefaults {
  fast: string;
  reasoning: string;
}

export interface ReviewEntry {
  relPath: string;
  usedReasoningPass: boolean;
  modelId: string;
  confidence: number;
  notes: string;
  fieldCount: number;
  reportUrls: string[];
}

export interface ProcessedFile {
  renderedFile: RenderedFile;
  reviewEntry: ReviewEntry;
}

export interface RuntimeContext {
  versions: string[];
  outputDir: string;
  versionConcurrency: number;
  fileTaskConcurrency: number;
  confidenceThreshold: number;
  fastModelId: string;
  reasoningModelId: string;
  fastModel: LanguageModel;
  reasoningModel: LanguageModel;
  client: Awaited<ReturnType<typeof createUCDClient>>;
  fetchLimit: Limiter;
  aiLimit: Limiter;
}
