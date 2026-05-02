/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:50:03.414Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Line_Break property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  line_break: "Unknown" | "XX" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point", "line_break"];
