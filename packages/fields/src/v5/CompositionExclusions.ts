/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:56:42.580Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point or range listed in the Composition Exclusion Table.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point_range: string;

  /**
   * Type of composition exclusion (Primary or Secondary).
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  exclusion_type: "Primary" | "Secondary";
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point_range", "exclusion_type"];
