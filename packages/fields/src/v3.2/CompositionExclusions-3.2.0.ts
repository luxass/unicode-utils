/**
 * Parsed row from `CompositionExclusions-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/CompositionExclusions-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 3.2
 * @fields 1
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:31:25.970Z
 */
export interface CompositionExclusions320 {
  /**
   * Unicode code point that is a composition exclusion per UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_320_FIELDS = ["code_point"];
