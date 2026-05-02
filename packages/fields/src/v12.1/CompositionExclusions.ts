/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 12.1
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:46:09.995Z
 */
export interface CompositionExclusions {
  /**
   * Code point excluded from composition per the Primary Exclusion List in UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  codepoint: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["codepoint"];
