/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedLineBreak.txt#L20
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:33:22.946Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range explicitly listed for Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Line_Break property value (defaults to Unknown (XX) for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedLineBreak.txt#L20
   */
  line_break: "XX" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
