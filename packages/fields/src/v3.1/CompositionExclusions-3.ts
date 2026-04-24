/**
 * Parsed row from `CompositionExclusions-3.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/CompositionExclusions-3.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/CompositionExclusions-3.txt#L7
 *
 * @unicodeVersion 3.1
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:14.646Z
 */
export interface CompositionExclusions3 {
  /**
   * Unicode code point listed as a Composition Exclusion from the UAX #15 Composition Exclusion Table.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/CompositionExclusions-3.txt#L7
   */
  code_point: string;
}

export const COMPOSITION_EXCLUSIONS_3_FIELDS = ["code_point"];
