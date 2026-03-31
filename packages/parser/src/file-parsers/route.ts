import type { FileParser } from "./types";

/**
 * Resolve the correct FileParser for a given fileName and version.
 * Returns undefined if no parser is registered for the file.
 */
export function resolve(
  _fileName: string | undefined,
  _version: string | undefined,
): FileParser | undefined {
  return undefined;
}
