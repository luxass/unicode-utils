/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:45:48.753Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Sentence_Break property; unlisted code points default to Other (XX).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  sentence_break: "Other" | "XX" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
