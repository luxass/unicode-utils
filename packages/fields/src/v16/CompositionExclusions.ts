/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 16
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:41:33.181Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point listed in the Composition Exclusion Table as defined in UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
