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
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:40:46.004Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Word_Break property value; all unlisted code points default to Other.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  word_break: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
