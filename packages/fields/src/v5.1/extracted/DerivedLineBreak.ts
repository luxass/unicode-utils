/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:54:04.919Z
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
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point", "line_break"];
