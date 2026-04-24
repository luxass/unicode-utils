/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 12
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:23:47.744Z
 */
export interface CompositionExclusions {
  /**
   * Code point or range of characters listed in the Composition Exclusion Table.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point_range: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point_range"];
