/**
 * Parsed row from `extracted/DerivedLineBreak-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedLineBreak-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedLineBreak-4.0.1.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedLineBreak-4.0.1.txt#L18
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:38.673Z
 */
export interface ExtractedDerivedLineBreak401 {
  /**
   * Unicode code point or range explicitly listed for Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedLineBreak-4.0.1.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Line_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedLineBreak-4.0.1.txt#L18
   */
  line_break: "Unknown";
}

export const EXTRACTED_DERIVED_LINE_BREAK_401_FIELDS = ["code_point_range", "line_break"];
