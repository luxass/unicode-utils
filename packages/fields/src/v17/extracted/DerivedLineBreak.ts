/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedLineBreak.txt#L12
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:36.405Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Line_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedLineBreak.txt#L12
   */
  line_break: "Unknown" | "Prefix_Numeric" | "Ideographic" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
