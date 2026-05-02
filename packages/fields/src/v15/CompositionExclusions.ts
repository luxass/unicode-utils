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
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:45:21.147Z
 */
export interface CompositionExclusions {
  /**
   * Hexadecimal Unicode code point or range that is a primary composition exclusion per the table in UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
