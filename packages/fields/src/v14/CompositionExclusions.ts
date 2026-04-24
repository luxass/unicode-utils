/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 14
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:19:35.336Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point listed in the Composition Exclusion Table.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  codepoint: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["codepoint"];
