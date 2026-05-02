/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:56:30.820Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point (first column).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Line_Break property value; Unknown (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedLineBreak.txt#L11-L14
   */
  line_break: "XX" | "AL" | "BA" | "BB" | "B2" | "BK" | "CB" | "CM" | "CR" | "EX" | "GL" | "HY" | "H2" | "H3" | "ID" | "IN" | "JL" | "JV" | "JT" | "LF" | "NL" | "NS" | "NU" | "OP" | "PO" | "PR" | "QU" | "RI" | "SA" | "SG" | "SP" | "SY" | "WJ" | "ZW" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break"];
