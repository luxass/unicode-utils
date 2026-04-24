/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:18:16.962Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  word_break: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
