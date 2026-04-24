/**
 * Parsed row from `LineBreak.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/LineBreak.txt#L16-L40
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:17:37.439Z
 */
export interface LineBreak {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/LineBreak.txt#L16
   */
  code_point_range: string;

  /**
   * Line_Break property, consisting of one of the following values.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/LineBreak.txt#L17-L40
   */
  line_break:
    | "BK"
    | "CM"
    | "CR"
    | "GL"
    | "LF"
    | "NL"
    | "SP"
    | "WJ"
    | "ZW"
    | "ZWJ"
    | "AI"
    | "AK"
    | "AL"
    | "AP"
    | "AS"
    | "B2"
    | "BA"
    | "BB"
    | "CB"
    | "CJ"
    | "CL"
    | "CP"
    | "EB"
    | "EM"
    | "EX"
    | "H2"
    | "H3"
    | "HL"
    | "HY"
    | "ID"
    | "IN"
    | "IS"
    | "JL"
    | "JT"
    | "JV"
    | "NS"
    | "NU"
    | "OP"
    | "PO"
    | "PR"
    | "QU"
    | "RI"
    | "SA"
    | "SG"
    | "SY"
    | "VF"
    | "VI"
    | "XX";
}

export const LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
