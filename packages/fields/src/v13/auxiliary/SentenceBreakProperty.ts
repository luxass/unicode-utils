/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:44.773Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range (first column).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Sentence_Break property value; unlisted code points have value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
   */
  sentence_break: "XX" | "CR" | "LF" | "Sep" | "STerm" | "ATerm" | "FO" | "Ex" | "IO" | "Upper" | "OLetter" | "Lower" | "Numeric" | "Sp" | "SA" | "SC" | "ST" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point_range", "sentence_break"];
