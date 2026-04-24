/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:27:28.372Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  code_point: string;

  /**
   * Sentence_Break property value per UAX #29.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  sentence_break: string;
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
