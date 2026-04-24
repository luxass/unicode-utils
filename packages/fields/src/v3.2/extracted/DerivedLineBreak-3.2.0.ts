/**
 * Parsed row from `extracted/DerivedLineBreak-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedLineBreak-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:21.221Z
 */
export interface ExtractedDerivedLineBreak320 {
  /**
   * Unicode code point or range listing the Line Break property.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  code_point_range: string;

  /**
   * Line breaking class from LineBreak.txt field 1.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  line_break: string;
}

export const EXTRACTED_DERIVED_LINE_BREAK_320_FIELDS = ["code_point_range", "line_break"];
