/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedLineBreak.txt#L20
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:06.074Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point explicitly listed for Line_Break property.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Value of the Line_Break property for the code point(s).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedLineBreak.txt#L20
   */
  line_break: "Unknown";
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
