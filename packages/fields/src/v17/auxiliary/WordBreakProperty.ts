/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:40:24.807Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_points: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  word_break: string;

  /**
   * Optional machine-readable comment providing additional information.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_points", "word_break", "comment"];
