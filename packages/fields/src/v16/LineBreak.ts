/**
 * Parsed row from `LineBreak.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/LineBreak.txt#L15-L24
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:41:50.701Z
 */
export interface LineBreak {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/LineBreak.txt#L15-L17
   */
  codepoints: string;

  /**
   * Line_Break property, consisting of one of the listed values.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/LineBreak.txt#L17-L24
   */
  line_break: "BK" | "CM" | "CR" | "GL" | "LF" | "NL" | "SP" | "WJ" | "ZW" | "ZWJ" | "AI" | "AK" | "AL" | "AP" | "AS" | "B2" | "BA" | "BB" | "CB" | "CJ" | "CL" | "CP" | "EB" | "EM" | "EX" | "H2" | "H3" | "HL" | "HY" | "ID" | "IN" | "IS" | "JL" | "JT" | "JV" | "NS" | "NU" | "OP" | "PO" | "PR" | "QU" | "RI" | "SA" | "SG" | "SY" | "VF" | "VI" | "XX";
}

export const LINE_BREAK_FIELDS = ["codepoints", "line_break"];
