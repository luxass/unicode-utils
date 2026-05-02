/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L14-L15
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:04.053Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range explicitly listed for the Sentence_Break property.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12
   */
  code_point_range: string;

  /**
   * Sentence_Break property value; unlisted code points have value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L14-L15
   */
  sentence_break: string;
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point_range", "sentence_break"];
