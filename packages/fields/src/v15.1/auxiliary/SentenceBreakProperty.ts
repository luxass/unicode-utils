/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:40:36.648Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Sentence_Break property value.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  sentence_break: string;
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
