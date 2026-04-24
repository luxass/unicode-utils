/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 15.1
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:09.584Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point listed as a character for the Composition Exclusion Table defined in UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  codepoint: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["codepoint"];
