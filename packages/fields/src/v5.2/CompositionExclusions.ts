/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CompositionExclusions.txt#L14
 *
 * @unicodeVersion 5.2
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:41.078Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point listed as a composition exclusion per the Primary Exclusion List Table.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CompositionExclusions.txt#L14
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
