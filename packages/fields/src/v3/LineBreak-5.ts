/**
 * Parsed row from `LineBreak-5.txt` (Unicode 3).
 *
 * @see https://unicode.org/Public/3.0-Update/LineBreak-5.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update/LineBreak-5.txt#L8-L15
 * - https://ucdjs.dev/file-explorer/v/3.0-Update/LineBreak-5.txt#L24
 *
 * @unicodeVersion 3
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T05:10:19.962Z
 */
export interface LineBreak5 {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/LineBreak-5.txt#L8
   */
  unicode_value: string;

  /**
   * LineBreak property, consisting of one of the following values: Normative: "BK", "CR", "LF", "CM", "SG", "GL", "CB", "SP", "ZW" Informative: "XX", "OP", "CL", "QU", "NS", "EX", "SY", "IS", "PR", "PO", "NU", "AL", "ID", "IN", "HY", "BB", "BA", "SA", "AI", "B2".
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/LineBreak-5.txt#L9-L15
   */
  linebreak_property: "BK" | "CR" | "LF" | "CM" | "SG" | "GL" | "CB" | "SP" | "ZW" | "XX" | "OP" | "CL" | "QU" | "NS" | "EX" | "SY" | "IS" | "PR" | "PO" | "NU" | "AL" | "ID" | "IN" | "HY" | "BB" | "BA" | "SA" | "AI" | "B2";

  /**
   * Unicode name (this is purely informative).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/LineBreak-5.txt#L24
   */
  unicode_name: string;
}

export const LINE_BREAK_5_FIELDS = ["unicode_value", "linebreak_property", "unicode_name"];
