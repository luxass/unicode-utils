/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedLineBreak.txt#L12
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedLineBreak.txt#L17
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:05.892Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * @missing: 0000..10FFFF; Unknown.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedLineBreak.txt#L17
   */
  code_point_range: string;

  /**
   * Line_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedLineBreak.txt#L12
   */
  line_break: "Unknown";
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
