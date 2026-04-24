/**
 * Parsed row from `LineBreak.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/LineBreak.txt#L15-L24
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/LineBreak.txt#L44-L48
 *
 * @unicodeVersion 11
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:33.105Z
 */
export interface LineBreak {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/LineBreak.txt#L16
   */
  codepoints: string;

  /**
   * Line_Break property, consisting of one of the listed values.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/LineBreak.txt#L15-L24
   */
  line_break: "BK" | "CM" | "CR" | "GL" | "LF" | "NL" | "SP" | "WJ" | "ZW" | "ZWJ" | "AI" | "AL" | "B2" | "BA" | "BB" | "CB" | "CJ" | "CL" | "CP" | "EB" | "EM" | "EX" | "H2" | "H3" | "HL" | "HY" | "ID" | "IN" | "IS" | "JL" | "JT" | "JV" | "NS" | "NU" | "OP" | "PO" | "PR" | "QU" | "RI" | "SA" | "SG" | "SY" | "XX";

  /**
   * Comments following the number sign listing the General_Category property value or the L& alias of the derived value LC, the Unicode character name or names, and, in lines with ranges of code points, the code point count in square brackets.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/LineBreak.txt#L44-L48
   */
  comment: string;
}

export const LINE_BREAK_FIELDS = ["codepoints", "line_break", "comment"];
