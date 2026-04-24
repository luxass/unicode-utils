/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 17
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:48:55.822Z
 */
export interface CompositionExclusions {
  /**
   * Code point or range listed in the Primary Composition Exclusion List Table.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
