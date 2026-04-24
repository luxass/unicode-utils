/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CompositionExclusions.txt#L16
 *
 * @unicodeVersion 9
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:10.707Z
 */
export interface CompositionExclusions {
  /**
   * http://www.unicode.org/unicode/reports/tr15/ Primary_Exclusion_List_Table.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CompositionExclusions.txt#L16
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
