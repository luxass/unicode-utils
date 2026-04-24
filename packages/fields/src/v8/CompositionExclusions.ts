/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 8
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:05.235Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point listed in the Composition Exclusion Table per UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  codepoint: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["codepoint"];
