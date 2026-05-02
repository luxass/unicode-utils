/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:44:04.261Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Word_Break property value per UAX #44 and UAX #29.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  word_break: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
