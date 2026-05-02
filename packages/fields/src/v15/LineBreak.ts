/**
 * Parsed row from `LineBreak.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/LineBreak.txt#L15-L24
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:13.840Z
 */
export interface LineBreak {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/LineBreak.txt#L15-L17
   */
  codepoints: string;

  /**
   * Line_Break property, consisting of one of the following values.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/LineBreak.txt#L17-L24
   */
  line_break: "BK" | "CM" | "CR" | "GL" | "LF" | "NL" | "SP" | "WJ" | "ZW" | "ZWJ" | "AI" | "AL" | "B2" | "BA" | "BB" | "CB" | "CJ" | "CL" | "CP" | "EB" | "EM" | "EX" | "H2" | "H3" | "HL" | "HY" | "ID" | "IN" | "IS" | "JL" | "JT" | "JV" | "NS" | "NU" | "OP" | "PO" | "PR" | "QU" | "RI" | "SA" | "SG" | "SY" | "XX";
}

export const LINE_BREAK_FIELDS = ["codepoints", "line_break"];
