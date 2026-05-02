/**
 * Parsed row from `CompositionExclusions-3.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/CompositionExclusions-3.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:54:48.728Z
 */
export interface CompositionExclusions3 {
  /**
   * Unicode code point or range excluded from composition.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  codepoint_range: string;

  /**
   * Type of the composition exclusion (e.g. Primary, Script Specific).
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  exclusion_type: "Primary" | "Script Specific";
}

export const COMPOSITION_EXCLUSIONS_3_FIELDS = ["codepoint_range", "exclusion_type"];
