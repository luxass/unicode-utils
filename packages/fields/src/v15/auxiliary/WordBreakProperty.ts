/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/auxiliary/WordBreakProperty.txt#L12
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/auxiliary/WordBreakProperty.txt#L14-L15
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:55.167Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Word_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/auxiliary/WordBreakProperty.txt#L14-L15
   */
  code_point_range: string;

  /**
   * Word_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/auxiliary/WordBreakProperty.txt#L12
   */
  word_break:
    | "AL"
    | "CR"
    | "Extend"
    | "ExtendNumLet"
    | "FO"
    | "Format"
    | "H2"
    | "H3"
    | "HL"
    | "HY"
    | "ID"
    | "JL"
    | "JT"
    | "JV"
    | "LF"
    | "NL"
    | "NU"
    | "Other"
    | "Perl_CR"
    | "Perl_LF"
    | "RI"
    | "SP"
    | "SY"
    | "WSegSpace"
    | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
