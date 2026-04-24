/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:41.703Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Property: Sentence_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12
   */
  code_point: string;

  /**
   * Sentence_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12
   */
  sentence_break: "ATerm" | "Buffer" | "Close" | "CR" | "Extend" | "Format" | "LF" | "Lower" | "Numeric" | "OLetter" | "Other" | "Sep" | "Sp" | "STerm" | "Upper" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
