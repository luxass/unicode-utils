/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/auxiliary/WordBreakProperty.txt#L16
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:05.869Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/auxiliary/WordBreakProperty.txt#L16
   */
  code_point_range: string;

  /**
   * Word_Break property value; unlisted code points have value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/auxiliary/WordBreakProperty.txt#L11-L14
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
    | "Hebrew_Letter"
    | "HY"
    | "ID"
    | "JL"
    | "JT"
    | "JV"
    | "LF"
    | "NL"
    | "Other"
    | "Perl"
    | "RI"
    | "SP"
    | "SY"
    | "XX";
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point_range", "word_break"];
