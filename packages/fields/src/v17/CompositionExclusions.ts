/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 17
 * @fields 1
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:15:09.342Z
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
