/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:27:50.027Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  code_point_range: string;

  /**
   * Line breaking class per UAX #14.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  line_break:
    | "XX"
    | "OP"
    | "CL"
    | "CP"
    | "QU"
    | "NS"
    | "EX"
    | "SY"
    | "IS"
    | "PR"
    | "PO"
    | "NU"
    | "AL"
    | "ID"
    | "IN"
    | "HY"
    | "BA"
    | "BB"
    | "B2"
    | "HL"
    | "CM"
    | "ZWJ"
    | "H2"
    | "H3"
    | "JL"
    | "JV"
    | "JT"
    | "RJ"
    | "VJ"
    | "CB"
    | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
