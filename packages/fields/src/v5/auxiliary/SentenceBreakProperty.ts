/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:22.835Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range (first field in standard property value files per UAX #44).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint: string;

  /**
   * Sentence_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L11-L14
   */
  sentence_break: "CR" | "LF" | "Extend" | "Sp" | "Sep" | "Format" | "STerm" | "ATerm" | "Lower" | "Upper" | "OLetter" | "Numeric" | "Other" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["codepoint", "sentence_break"];
