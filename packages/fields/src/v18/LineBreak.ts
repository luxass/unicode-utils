/**
 * Parsed row from `LineBreak.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/LineBreak.txt#L16-L24
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:22.695Z
 */
export interface LineBreak {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/LineBreak.txt#L16
   */
  code_point: string;

  /**
   * Line_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/LineBreak.txt#L17-L24
   */
  line_break:
    | "AI"
    | "AK"
    | "AL"
    | "AP"
    | "AS"
    | "B2"
    | "BA"
    | "BB"
    | "BK"
    | "CB"
    | "CJ"
    | "CL"
    | "CM"
    | "CP"
    | "CR"
    | "EB"
    | "EM"
    | "EX"
    | "GL"
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
    | "VF"
    | "VI"
    | "WJ"
    | "XX"
    | "ZW"
    | "ZWJ";
}

export const LINE_BREAK_FIELDS = ["code_point", "line_break"];
