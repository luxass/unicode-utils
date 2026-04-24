/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L11-L14
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:08.636Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Sentence_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L11-L14
   */
  codepoint: string;

  /**
   * Sentence_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L11-L14
   */
  sentence_break: "CR" | "LF" | "Extend" | "Sp" | "Sep" | "Format" | "STerm" | "ATerm" | "Lower" | "Upper" | "OLetter" | "Numeric" | "Close" | "Hyp" | "Break" | "E_Base" | "E_Modifier" | "ZWJ" | "MidNum" | "MidNumLet" | "MidLetter" | "MidSentence" | "Other" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["codepoint", "sentence_break"];
