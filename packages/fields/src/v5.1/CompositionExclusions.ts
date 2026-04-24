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
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:44.961Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point or range of code points listed in the Composition Exclusion Table.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
