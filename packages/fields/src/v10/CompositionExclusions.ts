/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/CompositionExclusions.txt#L16
 *
 * @unicodeVersion 10
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:34:56.012Z
 */
export interface CompositionExclusions {
  /**
   * http://www.unicode.org/unicode/reports/tr15/ Primary_Exclusion_List_Table.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/CompositionExclusions.txt#L16
   */
  codepoint: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["codepoint"];
