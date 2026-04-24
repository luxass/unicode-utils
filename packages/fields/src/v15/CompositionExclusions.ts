/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 15
 * @fields 1
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:48:59.816Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point or range listed as a primary composition exclusion.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  codepoint: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["codepoint"];
