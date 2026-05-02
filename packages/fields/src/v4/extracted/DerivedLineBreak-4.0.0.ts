/**
 * Parsed row from `extracted/DerivedLineBreak-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedLineBreak-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedLineBreak-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:54:59.154Z
 */
export interface ExtractedDerivedLineBreak400 {
  /**
   * Code point or range explicitly listed with the Line Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedLineBreak-4.0.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * Line Break property value (listing LineBreak.txt, field 1).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedLineBreak-4.0.0.txt#L13
   */
  line_break: "XX" | "AL" | "BA" | "BB" | "B2" | "BK" | "CB" | "CM" | "CR" | "EX" | "GL" | "HY" | "H2" | "H3" | "ID" | "IN" | "JL" | "JT" | "JV" | "LF" | "NL" | "NS" | "NU" | "OP" | "PO" | "PR" | "QU" | "RI" | "SA" | "SG" | "SP" | "SY" | "WJ" | "ZW";
}

export const EXTRACTED_DERIVED_LINE_BREAK_400_FIELDS = ["code_point_range", "line_break"];
