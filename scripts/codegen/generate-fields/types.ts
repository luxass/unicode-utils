import type { LanguageModel } from "ai";

export interface Field {
  name: string;
  type: string;
  description: string;
  source: string;
}

export interface RenderedFile {
  relPath: string;
  code: string;
}

export interface GenerateFieldsResult {
  fields: Field[];
  confidence: number;
  notes: string;
}

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

export interface AiRunContext {
  modelId: string;
  shortVersion: string;
  relPath: string;
}

export interface ProcessFileOptions {
  fastModelId: string;
  reasoningModelId: string;
  fastModel: LanguageModel;
  reasoningModel: LanguageModel;
  fetchFile: (apiPath: string) => Promise<unknown>;
  runAi: <T>(task: () => Promise<T>, context: AiRunContext) => Promise<T>;
  confidenceThreshold: number;
  readExistingGeneratedFile: (shortVersion: string, relPath: string) => Promise<string | null>;
}

export interface ProcessVersionOptions extends Omit<
  ProcessFileOptions,
  "readExistingGeneratedFile"
> {
  outputDir: string;
  fetchFileTree: (fullVersion: string) => Promise<unknown>;
}
