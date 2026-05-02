/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:47:09.041Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range in hexadecimal notation (e.g., 0041 or 0021..0023).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Value of the Line_Break property (e.g., XX, AL).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["codepoint_range", "line_break"];
