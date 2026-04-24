/**
 * Parsed row from `LineBreak-6.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/LineBreak-6.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/LineBreak-6.txt#L8-L15
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:56:13.396Z
 */
export interface LineBreak6 {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/LineBreak-6.txt#L8
   */
  unicode_value: string;

  /**
   * LineBreak property, consisting of one of the normative ("BK", "CR", "LF", "CM", "SG", "GL", "CB", "SP", "ZW") or informative ("XX", "OP", "CL", "QU", "NS", "EX", "SY", "IS", "PR", "PO", "NU", "AL", "ID", "IN", "HY", "BB", "BA", "SA", "AI", "B2") values.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/LineBreak-6.txt#L8-L15
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
    | "B2";
}

export const LINE_BREAK_6_FIELDS = ["unicode_value", "linebreak_property"];
