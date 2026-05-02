/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:57:37.466Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range of code points.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  code_point: string;

  /**
   * Line breaking class for the code point(s); unlisted code points default to Unknown (XX).
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point", "line_break"];
