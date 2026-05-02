/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedLineBreak.txt#L12
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:48.381Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point (e.g. 0020 or 0020..007E).
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  code_point_range: string;

  /**
   * Property: Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/extracted/DerivedLineBreak.txt#L12
   */
  line_break: "XX" | "AL" | "BA" | "BB" | "B2" | "BK" | "CB" | "CM" | "CR" | "EX" | "GL" | "HY" | "H2" | "H3" | "ID" | "IN" | "JL" | "JT" | "JV" | "LF" | "NL" | "NS" | "NU" | "OP" | "PO" | "PR" | "QU" | "RI" | "SA" | "SG" | "SP" | "SY" | "WJ" | "ZW" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
