/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 6.2
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:52:38.391Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point that is a primary composition exclusion per UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
