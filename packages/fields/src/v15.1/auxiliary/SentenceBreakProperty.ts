/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:10.278Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range (first field in standard UCD property files).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint: string;

  /**
   * Sentence_Break property value; unlisted code points have value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
   */
  sentence_break: "ATerm" | "Close" | "CR" | "Extend" | "Format" | "LF" | "Lower" | "Numeric" | "OLetter" | "Other" | "SContinue" | "Sep" | "Sp" | "STerm" | "Upper" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["codepoint", "sentence_break"];
