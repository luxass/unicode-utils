/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedLineBreak.txt#L12-L15
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:44:26.547Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Code point range or single code point in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * Line_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedLineBreak.txt#L12-L15
   */
  line_break: "Unknown" | "Prefix_Numeric" | "Ideographic" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["range", "line_break"];
