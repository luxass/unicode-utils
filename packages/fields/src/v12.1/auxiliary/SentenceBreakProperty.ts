/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:18:07.813Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Code point or range explicitly listed for the Sentence_Break property.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/auxiliary/SentenceBreakProperty.txt#L14-L15
   */
  code_point_range: string;

  /**
   * Sentence_Break property value (defaults to Other for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
   */
  sentence_break: string;
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point_range", "sentence_break"];
