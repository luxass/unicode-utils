/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L15
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:44:31.845Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range in hexadecimal format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Sentence_Break property; unlisted code points default to Other.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  sentence_break: string;

  /**
   * Alias for Other value.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L15
   */
  alias: "XX";
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break", "alias"];
