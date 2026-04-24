/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:29:13.035Z
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
    | "AL"
    | "BK"
    | "CB"
    | "CL"
    | "CM"
    | "CR"
    | "EX"
    | "GL"
    | "H2"
    | "H3"
    | "HY"
    | "ID"
    | "IN"
    | "JL"
    | "JT"
    | "JV"
    | "LF"
    | "NL"
    | "NS"
    | "NU"
    | "OP"
    | "PO"
    | "PR"
    | "QU"
    | "RI"
    | "SA"
    | "SG"
    | "SP"
    | "SY"
    | "WJ"
    | "ZW"
    | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
