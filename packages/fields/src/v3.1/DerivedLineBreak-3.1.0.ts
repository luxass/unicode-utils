/**
 * Parsed row from `DerivedLineBreak-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedLineBreak-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedLineBreak-3.1.0.txt#L13-L14
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:36:53.789Z
 */
export interface DerivedLineBreak310 {
  /**
   * Unicode code point or range listing the Line Break property (from LineBreak.txt, field 1).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedLineBreak-3.1.0.txt#L13-L14
   */
  code_point_range: string;

  /**
   * (listing LineBreak.txt, field 1) ================================================.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedLineBreak-3.1.0.txt#L13-L14
   */
  line_break:
    | "BK"
    | "CR"
    | "LF"
    | "CM"
    | "NL"
    | "SG"
    | "WJ"
    | "ZW"
    | "GL"
    | "SP"
    | "ZWJ"
    | "B2"
    | "BA"
    | "BB"
    | "HY"
    | "HH"
    | "CB"
    | "EX"
    | "IN"
    | "JI"
    | "PR"
    | "PO"
    | "NU"
    | "AL"
    | "NS"
    | "OP"
    | "CL"
    | "CP"
    | "IS"
    | "SY"
    | "EB"
    | "EM"
    | "ZWJ"
    | (string & {});
}

export const DERIVED_LINE_BREAK_310_FIELDS = ["code_point_range", "line_break"];
