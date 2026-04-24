/**
 * Parsed row from `DerivedAge.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/DerivedAge.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/DerivedAge.txt#L37-L46
 *
 * @unicodeVersion 12.1
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:13.779Z
 */
export interface DerivedAge {
  /**
   * Code point(s) with Age property value, e.g. 'Age=V1_1'. All code points not explicitly listed have the value Unassigned (NA).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/DerivedAge.txt#L37-L46
   */
  codepoint_range: string;
}

export const DERIVED_AGE_FIELDS = ["codepoint_range"];
