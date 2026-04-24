/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 9
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:38.669Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range (e.g. 0020..FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Sentence_Break property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  sentence_break:
    | "CR"
    | "LF"
    | "Extend"
    | "Regional_Indicator"
    | "Sp"
    | "Sep"
    | "Format"
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

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = [
  "code_point_range",
  "sentence_break",
  "comment",
];
