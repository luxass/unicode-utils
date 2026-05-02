/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:55:53.536Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range in hexadecimal.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Line_Break property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point", "line_break"];
