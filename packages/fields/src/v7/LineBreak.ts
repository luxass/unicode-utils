/**
 * Parsed row from `LineBreak.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/LineBreak.txt#L13-L22
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:12.048Z
 */
export interface LineBreak {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/LineBreak.txt#L14
   */
  code_point_or_range: string;

  /**
   * Line_Break property, consisting of one of the following values: Normative: "BK", "CR", "LF", "CM", "SG", "GL", "CB", "SP", "ZW", "NL", "WJ", "JL", "JV", "JT", "H2", "H3" Informative: "XX", "OP", "CL", "CP", "QU", "NS", "EX", "SY", "IS", "PR", "PO", "NU", "AL", "ID", "IN", "HY", "BB", "BA", "SA", "AI", "B2", "HL", "CJ", "RI".
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/LineBreak.txt#L13-L22
   */
  line_break:
    | "BK"
    | "CR"
    | "LF"
    | "CM"
    | "SG"
    | "GL"
    | "CB"
    | "SP"
    | "ZW"
    | "NL"
    | "WJ"
    | "JL"
    | "JV"
    | "JT"
    | "H2"
    | "H3"
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
    | "BB"
    | "BA"
    | "SA"
    | "AI"
    | "B2"
    | "HL"
    | "CJ"
    | "RI";
}

export const LINE_BREAK_FIELDS = ["code_point_or_range", "line_break"];
