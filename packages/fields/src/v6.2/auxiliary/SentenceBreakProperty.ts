/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:51:19.194Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or code point range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Sentence_Break property as defined in UAX #29.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  sentence_break: "CR" | "LF" | "Sep" | "STerm" | "ATerm" | "OTerm" | "Numeric" | "Lower" | "Upper" | "Sp" | "Extend" | "Format" | "XX";
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
