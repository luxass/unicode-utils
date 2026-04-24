/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:12.756Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point (e.g. 0000..10FFFF or 0020).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Line break class per Unicode Line_Break property.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  line_break:
    | "XX"
    | "AL"
    | "BK"
    | "CB"
    | "CL"
    | "CM"
    | "CR"
    | "EX"
    | "GL"
    | "H2"
    | "H3"
    | "HY"
    | "ID"
    | "IN"
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
    | "ZW"
    | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
