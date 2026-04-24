/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:14.394Z
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
    | "AL"
    | "B2"
    | "BA"
    | "BB"
    | "BK"
    | "CB"
    | "CM"
    | "CR"
    | "EX"
    | "GL"
    | "H2"
    | "H3"
    | "HL"
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
    | "XX"
    | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
