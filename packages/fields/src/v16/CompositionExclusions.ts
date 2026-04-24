/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CompositionExclusions.txt#L10-L17
 *
 * @unicodeVersion 16
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:15.733Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point listed as a Composition Exclusion.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/CompositionExclusions.txt#L10-L17
   */
  codepoint: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["codepoint"];
