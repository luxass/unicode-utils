/**
 * Parsed row from `LineBreak.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/LineBreak.txt#L16-L24
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:40.697Z
 */
export interface LineBreak {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/LineBreak.txt#L16
   */
  codepoints: string;

  /**
   * Line_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/LineBreak.txt#L17-L24
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
    | "AL"
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
    | "XX";
}

export const LINE_BREAK_FIELDS = ["codepoints", "line_break"];
