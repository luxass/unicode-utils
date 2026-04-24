/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 13
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:19:37.548Z
 */
export interface CompositionExclusions {
  /**
   * Hexadecimal Unicode code point or range excluded from canonical composition, as listed in the Primary Exclusion List.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
