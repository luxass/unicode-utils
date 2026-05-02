/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:49:16.834Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Sentence_Break property.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  sentence_break: "CR" | "LF" | "Sep" | "STerm" | "ATerm" | "OLetter" | "Upper" | "Lower" | "Numeric" | "Sp" | "Format" | "Extend" | "XX";
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
