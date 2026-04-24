/**
 * Parsed row from `LineBreak.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/LineBreak.txt#L14-L22
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:36.961Z
 */
export interface LineBreak {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/LineBreak.txt#L14
   */
  unicode_value: string;

  /**
   * LineBreak property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/LineBreak.txt#L15-L22
   */
  linebreak_property:
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

export const LINE_BREAK_FIELDS = ["unicode_value", "linebreak_property"];
