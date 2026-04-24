/**
 * Parsed row from `CompositionExclusions-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/CompositionExclusions-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 4
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:54:17.114Z
 */
export interface CompositionExclusions400 {
  /**
   * Code point listed in the UAX #15 Composition Exclusion Table.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_400_FIELDS = ["code_point"];
