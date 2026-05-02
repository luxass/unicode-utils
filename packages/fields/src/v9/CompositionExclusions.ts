/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 9
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:48:56.757Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point or range excluded from composition, as listed in the Primary Exclusion List.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  codepoint_range: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["codepoint_range"];
