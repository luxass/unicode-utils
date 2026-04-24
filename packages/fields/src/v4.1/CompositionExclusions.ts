/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 4.1
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:54:17.541Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point listed as a composition exclusion per UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
