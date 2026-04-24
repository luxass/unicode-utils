/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:14:42.394Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range for which the Word_Break property is explicitly listed.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Word_Break property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  word_break: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
