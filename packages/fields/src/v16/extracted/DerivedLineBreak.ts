/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:01:16.419Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * Line_Break property value such as Unknown (XX).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  line_break: string;

  /**
   * Optional comment providing additional context.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["range", "line_break", "comment"];
