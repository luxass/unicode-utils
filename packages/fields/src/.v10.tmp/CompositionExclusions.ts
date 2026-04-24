/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 10
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:42.419Z
 */
export interface CompositionExclusions {
  /**
   * Unicode code point listed as a composition exclusion.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  codepoint: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["codepoint"];
