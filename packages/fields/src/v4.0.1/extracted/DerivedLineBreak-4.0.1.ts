/**
 * Parsed row from `extracted/DerivedLineBreak-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedLineBreak-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:35:51.178Z
 */
export interface ExtractedDerivedLineBreak401 {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  code_point: string;

  /**
   * Line_Break class such as Unknown (XX).
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_401_FIELDS = ["code_point", "line_break"];
