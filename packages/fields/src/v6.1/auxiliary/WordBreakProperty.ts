/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:27:40.438Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range for the Word_Break property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Word_Break property value (e.g. Other, XX).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  word_break: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
