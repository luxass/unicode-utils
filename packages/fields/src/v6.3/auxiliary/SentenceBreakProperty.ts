/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:48:45.321Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Sentence_Break property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  sentence_break: string;
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
