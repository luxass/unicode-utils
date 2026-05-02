/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedLineBreak.txt#L12
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedLineBreak.txt#L14
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:54.393Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range explicitly listed for Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedLineBreak.txt#L14
   */
  code_point_range: string;

  /**
   * Line_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedLineBreak.txt#L12
   */
  line_break: "Unknown";
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
