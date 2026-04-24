/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L14-L15
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:18:14.014Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Sentence_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12
   */
  code_point_range: string;

  /**
   * Sentence_Break property value; unlisted code points have default value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L14-L15
   */
  sentence_break: string;
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point_range", "sentence_break"];
