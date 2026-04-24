/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 11
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:51:02.129Z
 */
export interface CompositionExclusions {
  /**
   * Code point listed in the Composition Exclusion Table defined in UAX #15, Unicode Normalization Forms.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["code_point"];
