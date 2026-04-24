/**
 * Parsed row from `LineBreak.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/LineBreak.txt#L16-L24
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:17.738Z
 */
export interface LineBreak {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/LineBreak.txt#L16
   */
  codepoints: string;

  /**
   * Line_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/LineBreak.txt#L17-L24
   */
  line_break:
    | "AI"
    | "AL"
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
    | "WJ"
    | "XX"
    | "ZW"
    | "ZWJ";
}

export const LINE_BREAK_FIELDS = ["codepoints", "line_break"];
