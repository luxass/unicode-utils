/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:16.482Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range explicitly listed for Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedLineBreak.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Line_Break property value (Unknown for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
