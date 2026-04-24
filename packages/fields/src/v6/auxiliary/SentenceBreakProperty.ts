/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L11
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L13-L14
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:27:30.897Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Sentence_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Sentence_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L11
   */
  sentence_break:
    | "CR"
    | "LF"
    | "Extend"
    | "Sp"
    | "Sep"
    | "STerm"
    | "ATerm"
    | "Close"
    | "OLetter"
    | "Lower"
    | "Numeric"
    | "Other"
    | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point_range", "sentence_break"];
