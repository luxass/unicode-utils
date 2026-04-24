/**
 * Parsed row from `DerivedLineBreak-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedLineBreak-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedLineBreak-3.1.0.txt#L13
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:16.001Z
 */
export interface DerivedLineBreak310 {
  /**
   * Unicode code point or range listing Line Break property from LineBreak.txt field 1.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedLineBreak-3.1.0.txt#L13
   */
  code_point_range: string;

  /**
   * Line Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedLineBreak-3.1.0.txt#L13
   */
  line_break: string;
}

export const DERIVED_LINE_BREAK_310_FIELDS = ["code_point_range", "line_break"];
