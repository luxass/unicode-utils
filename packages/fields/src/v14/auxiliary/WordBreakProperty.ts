/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:44:19.989Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range.
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
