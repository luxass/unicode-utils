/**
 * Parsed row from `CompositionExclusions-1.txt` (Unicode 3).
 *
 * @see https://unicode.org/Public/3.0-Update/CompositionExclusions-1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 3
 * @fields 1
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T05:10:56.295Z
 */
export interface CompositionExclusions1 {
  /**
   * Hexadecimal code point or range from the UTR #15 Primary Exclusion List Table.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point_range: string;
}

export const COMPOSITION_EXCLUSIONS_1_FIELDS = ["code_point_range"];
