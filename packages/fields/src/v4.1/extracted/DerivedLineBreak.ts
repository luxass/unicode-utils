/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedLineBreak.txt#L18
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:32.957Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range explicitly listed for Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
   */
  code_point: string;

  /**
   * Line_Break property value; Unknown for explicitly listed code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedLineBreak.txt#L18
   */
  line_break: "XX";
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point", "line_break"];
