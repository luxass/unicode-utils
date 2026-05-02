/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedLineBreak.txt#L13-L14
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedLineBreak.txt#L20
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:02.948Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range explicitly listed for Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedLineBreak.txt#L13-L14
   */
  code_point_range: string;

  /**
   * =Unknown.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedLineBreak.txt#L20
   */
  line_break: "Unknown";
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
