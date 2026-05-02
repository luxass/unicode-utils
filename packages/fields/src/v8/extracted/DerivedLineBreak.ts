/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedLineBreak.txt#L11
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedLineBreak.txt#L13-L14
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:19.773Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range explicitly listed for Line_Break property.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedLineBreak.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Value of the Line_Break property.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedLineBreak.txt#L11
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
