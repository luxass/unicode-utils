/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:23:44.908Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Line_Break property value as defined in UAX #14.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  line_break:
    | "XX"
    | "AL"
    | "CM"
    | "BA"
    | "BB"
    | "B2"
    | "BK"
    | "CB"
    | "CL"
    | "CP"
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
    | "ZW"
    | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
