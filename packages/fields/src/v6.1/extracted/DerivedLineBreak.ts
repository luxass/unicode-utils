/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:27:16.693Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range explicitly listed for Line_Break property.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Property: Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/extracted/DerivedLineBreak.txt#L11
   */
  line_break:
    | "XX"
    | "AL"
    | "CM"
    | "CR"
    | "LF"
    | "NL"
    | "BA"
    | "BB"
    | "B2"
    | "BK"
    | "CB"
    | "CL"
    | "CP"
    | "EX"
    | "GL"
    | "HY"
    | "H2"
    | "H3"
    | "ID"
    | "IN"
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
    | "SP"
    | "SY"
    | "WJ"
    | "ZW"
    | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
