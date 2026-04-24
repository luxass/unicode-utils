/**
 * Parsed row from `LineBreak.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/LineBreak.txt#L13-L23
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:59.729Z
 */
export interface LineBreak {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/LineBreak.txt#L14
   */
  unicode_value: string;

  /**
   * LineBreak property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/LineBreak.txt#L13-L23
   */
  line_break_property:
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
    | (string & {});
}

export const LINE_BREAK_FIELDS = ["unicode_value", "line_break_property"];
