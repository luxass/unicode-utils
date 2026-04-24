/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:15:37.104Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Line break class value as defined in UAX #14.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  line_break:
    | "AL"
    | "BK"
    | "CB"
    | "CM"
    | "CR"
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
    | "LF"
    | "NL"
    | "NS"
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
