/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:03.931Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Sentence_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
   */
  code_point_range: string;

  /**
   * Sentence_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
   */
  sentence_break: "CR" | "LF" | "Sep" | "STerm" | "ATerm" | "Lower" | "Sp" | "XX";
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point_range", "sentence_break"];
