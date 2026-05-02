/**
 * Parsed row from `LineBreak-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/LineBreak-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/LineBreak-3.2.0.txt#L7-L15
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:58:11.472Z
 */
export interface LineBreak320 {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/LineBreak-3.2.0.txt#L8
   */
  unicode_value: string;

  /**
   * LineBreak property, consisting of one of the following values: Normative: "BK", "CR", "LF", "CM", "SG", "GL", "CB", "SP", "ZW" Informative: "XX", "OP", "CL", "QU", "NS", "EX", "SY", "IS", "PR", "PO", "NU", "AL", "ID", "IN", "HY", "BB", "BA", "SA", "AI", "B2".
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/LineBreak-3.2.0.txt#L7-L15
   */
  linebreak_property: "BK" | "CR" | "LF" | "CM" | "SG" | "GL" | "CB" | "SP" | "ZW" | "XX" | "OP" | "CL" | "QU" | "NS" | "EX" | "SY" | "IS" | "PR" | "PO" | "NU" | "AL" | "ID" | "IN" | "HY" | "BB" | "BA" | "SA" | "AI" | "B2";
}

export const LINE_BREAK_320_FIELDS = ["unicode_value", "linebreak_property"];
