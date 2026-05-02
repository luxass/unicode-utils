/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:22.821Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Code point or range explicitly listed for the Sentence_Break property.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12
   */
  code_point_range: string;

  /**
   * Sentence_Break property value; unlisted code points have value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
   */
  sentence_break: string;
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point_range", "sentence_break"];
