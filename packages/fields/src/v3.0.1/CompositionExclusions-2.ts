/**
 * Parsed row from `CompositionExclusions-2.txt` (Unicode 3.0.1).
 *
 * @see https://unicode.org/Public/3.0-Update1/CompositionExclusions-2.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 3.0.1
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:55:35.789Z
 */
export interface CompositionExclusions2 {
  /**
   * Characters from the UTR #15 Composition Exclusion Table.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point_range: string;
}

export const COMPOSITION_EXCLUSIONS_2_FIELDS = ["code_point_range"];
