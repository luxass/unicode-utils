/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 6.3
 * @fields 1
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:31:47.823Z
 */
export interface CompositionExclusions {
  /**
   * Code point or range listed in the Composition Exclusion Table per UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point_range: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point_range"];
