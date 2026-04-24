/**
 * Parsed row from `LineBreak-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/LineBreak-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/LineBreak-4.0.0.txt#L7-L18
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:02.897Z
 */
export interface LineBreak400 {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/LineBreak-4.0.0.txt#L8
   */
  unicode_value: string;

  /**
   * LineBreak property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/LineBreak-4.0.0.txt#L7-L18
   */
  linebreak_property: "BK" | "CR" | "LF" | "CM" | "SG" | "GL" | "CB" | "SP" | "ZW" | "NL" | "WJ" | "XX" | "OP" | "CL" | "QU" | "NS" | "EX" | "SY" | "IS" | "PR" | "PO" | "NU" | "AL" | "ID" | "IN" | "HY" | "BB" | "BA" | "SA" | "AI" | "B2";
}

export const LINE_BREAK_400_FIELDS = ["unicode_value", "linebreak_property"];
