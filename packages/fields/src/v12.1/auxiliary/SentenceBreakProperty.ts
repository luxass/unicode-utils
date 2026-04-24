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
 * @generated 2026-04-23T18:51:11.408Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Sentence_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/auxiliary/SentenceBreakProperty.txt#L14
   */
  code_point: string;

  /**
   * Sentence_Break property value; unlisted code points have default value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
   */
  sentence_break:
    | "CR"
    | "LF"
    | "Extend"
    | "Sp"
    | "Sep"
    | "STerm"
    | "ATerm"
    | "Lower"
    | "Upper"
    | "OLetter"
    | "Numeric"
    | "Close"
    | "XX"
    | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
