/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 6.1
 * @fields 1
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:55:00.793Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point listed in the Primary Exclusion List of the Composition Exclusion Table.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
