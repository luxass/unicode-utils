/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 5.1
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:05.652Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Sentence_Break property value.
   *
   * @source https://ucdjs.dev/reports/tr29/
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
    | "Other"
    | (string & {});

  /**
   * Optional comment field.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break", "comment"];
