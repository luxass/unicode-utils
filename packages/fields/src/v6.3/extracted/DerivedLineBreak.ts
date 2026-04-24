/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr14/
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:22.587Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Unicode code point or range in the standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  codepoint: string;

  /**
   * Line breaking class per UAX #14.
   *
   * @source https://ucdjs.dev/reports/tr14/
   */
  line_break: "BK" | "CR" | "LF" | "CM" | "NL" | "SG" | "WJ" | "ZW" | "GL" | "SP" | "ZWJ" | "B2" | "BA" | "BB" | "HY" | "HH" | "CB" | "EX" | "IN" | "JI" | "JL" | "JV" | "JT" | "OP" | "PO" | "PR" | "QU" | "SA" | "SY" | "XX" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["codepoint", "line_break"];
