/**
 * Parsed row from `LineBreak.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/LineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/LineBreak.txt#L13-L22
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:56:00.520Z
 */
export interface LineBreak {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/LineBreak.txt#L14
   */
  unicode_value: string;

  /**
   * LineBreak property, consisting of one of the listed normative or informative values.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/LineBreak.txt#L13-L22
   */
  linebreak_property: "BK" | "CR" | "LF" | "CM" | "SG" | "GL" | "CB" | "SP" | "ZW" | "NL" | "WJ" | "JL" | "JV" | "JT" | "H2" | "H3" | "XX" | "OP" | "CL" | "CP" | "QU" | "NS" | "EX" | "SY" | "IS" | "PR" | "PO" | "NU" | "AL" | "ID" | "IN" | "HY" | "BB" | "BA" | "SA" | "AI" | "B2" | "HL" | "CJ";
}

export const LINE_BREAK_FIELDS = ["unicode_value", "linebreak_property"];
