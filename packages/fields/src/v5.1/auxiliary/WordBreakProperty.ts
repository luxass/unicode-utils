/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:53:04.366Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range to which the Word_Break property applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Value of the Word_Break property; defaults to Other for unlisted code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  word_break: "Other" | "XX" | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
