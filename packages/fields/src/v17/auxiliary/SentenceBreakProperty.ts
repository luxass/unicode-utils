/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:39:44.448Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range in hexadecimal notation.
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
