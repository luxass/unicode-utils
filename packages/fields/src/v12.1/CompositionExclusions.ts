/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 12.1
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:51:41.163Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point or range listed as a primary composition exclusion.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point_range: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point_range"];
