/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:46:52.917Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range in hexadecimal.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Word_Break property value; unlisted code points default to Other.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  word_break: "Other";
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
