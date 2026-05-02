/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:51:47.971Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range in standard UCD hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Line_Break property value as defined in UAX #14.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point", "line_break"];
