/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedLineBreak.txt#L12
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedLineBreak.txt#L14-L15
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:22.981Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range explicitly listed for Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedLineBreak.txt#L14-L15
   */
  code_point_range: string;

  /**
   * Property: Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedLineBreak.txt#L12
   */
  line_break: "XX" | string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
