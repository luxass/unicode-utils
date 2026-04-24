/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:07.290Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  code_point_range: string;

  /**
   * Line_Break property value; Unknown (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
   */
  line_break: "XX" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
