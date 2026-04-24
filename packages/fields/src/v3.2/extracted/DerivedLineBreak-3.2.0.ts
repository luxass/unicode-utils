/**
 * Parsed row from `extracted/DerivedLineBreak-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedLineBreak-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedLineBreak-3.2.0.txt#L13-L14
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:53.634Z
 */
export interface ExtractedDerivedLineBreak320 {
  /**
   * Line Break (listing LineBreak.txt, field 1) ================================================.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedLineBreak-3.2.0.txt#L13-L14
   */
  code_point: string;

  /**
   * Line Break property value listing LineBreak.txt field 1.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedLineBreak-3.2.0.txt#L13-L14
   */
  line_break:
    | "AL"
    | "B2"
    | "BA"
    | "BB"
    | "BK"
    | "CB"
    | "CM"
    | "CR"
    | "EX"
    | "GL"
    | "HY"
    | "H2"
    | "H3"
    | "HL"
    | "ID"
    | "IN"
    | "JL"
    | "JT"
    | "JV"
    | "LF"
    | "NL"
    | "NS"
    | "NU"
    | "OP"
    | "PO"
    | "PR"
    | "QU"
    | "RI"
    | "SA"
    | "SG"
    | "SP"
    | "SY"
    | "WJ"
    | "ZW"
    | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_320_FIELDS = ["code_point", "line_break"];
