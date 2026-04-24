/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:21.354Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Code point range in the standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  code_point_range: string;

  /**
   * Line_Break property value; Unknown (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
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
    | "JL"
    | "JV"
    | "JT"
    | "OP"
    | "CP"
    | "QU"
    | "NS"
    | "XX";
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
