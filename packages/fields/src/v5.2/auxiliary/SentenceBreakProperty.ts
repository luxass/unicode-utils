/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:33:07.841Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range.
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
    | "STerm"
    | "ATerm"
    | "SContinue"
    | "Upper"
    | "Lower"
    | "OLetter"
    | "Numeric"
    | "Sep"
    | "Format"
    | "ZWJ"
    | "SB"
    | "SC"
    | "Other";
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point_range", "sentence_break"];
