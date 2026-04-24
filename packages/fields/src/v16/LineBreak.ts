/**
 * Parsed row from `LineBreak.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/LineBreak.txt#L16-L24
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/LineBreak.txt#L45-L48
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:52.018Z
 */
export interface LineBreak {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/LineBreak.txt#L16
   */
  codepoints: string;

  /**
   * Line_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/LineBreak.txt#L17-L24
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

  /**
   * Comments listing General_Category property value or L& alias, Unicode character name or names, and code point count in square brackets for ranges.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/LineBreak.txt#L45-L48
   */
  comments: string;
}

export const LINE_BREAK_FIELDS = ["codepoints", "line_break", "comments"];
