/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:11.388Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Sentence_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L14-L15
   */
  code_point_range: string;

  /**
   * Sentence_Break property value; unlisted code points default to Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
   */
  sentence_break: "Other" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point_range", "sentence_break"];
