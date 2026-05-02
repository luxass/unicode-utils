/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedLineBreak.txt#L12
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 18
 * @fields 4
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:13.550Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point range or single code point (first field).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Line_Break property value as documented in UAX #14.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  line_break: "XX" | "Unknown" | "Currency_Symbols" | "Prefix_Numeric" | "Ideographic" | "AL" | "NU" | "BA" | "B2" | "CB" | "CM" | "CM1" | "CM2" | "CM3" | "CR" | "EB" | "EM" | "EX" | "GL" | "GW" | "HH" | "HY" | "H2" | "H3" | "ID" | "IN" | "JL" | "JT" | "JV" | "LF" | "NL" | "NS" | "OP" | "PO" | "PR" | "QU" | "RI" | "SA" | "SG" | "SP" | "SY" | "WJ" | "ZW" | (string & {});

  /**
   * Optional comment or range name (third field, sometimes present).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;

  /**
   * Line_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedLineBreak.txt#L12
   */
  property: "Line_Break";
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point_range", "line_break", "comment", "property"];
