/**
 * Parsed row from `CompositionExclusions.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/CompositionExclusions.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 5
 * @fields 1
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:54:20.547Z
 */
export interface CompositionExclusions {
  /**
   * Code point or range for the Composition Exclusion Table as defined in UAX #15.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  codepoint_range: string;
}

export const COMPOSITION_EXCLUSIONS_FIELDS = ["codepoint_range"];
