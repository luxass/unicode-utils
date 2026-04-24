/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 5.1
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:28:42.912Z
 */
export interface CompositionExclusions {
  /**
   * Code point or range of characters for the Composition Exclusion Table defined in UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point_range: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point_range"];
