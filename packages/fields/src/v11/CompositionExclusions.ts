/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 11
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:48:24.861Z
 */
export interface CompositionExclusions {
  /**
   * Character listed in the Composition Exclusion Table as defined in UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
