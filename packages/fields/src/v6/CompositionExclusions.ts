/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 6
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:52:39.783Z
 */
export interface CompositionExclusions {
  /**
   * Code point or range of characters for the Composition Exclusion Table as defined in UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point_range: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point_range"];
