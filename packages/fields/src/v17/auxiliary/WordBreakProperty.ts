/**
 * Parsed row from `auxiliary/WordBreakProperty.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/auxiliary/WordBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:24.096Z
 */
export interface AuxiliaryWordBreakProperty {
  /**
   * Unicode code point or range (inferred from standard UCD format).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Word_Break property value; defaults to Other (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/auxiliary/WordBreakProperty.txt#L12-L15
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
    | "JL"
    | "JV"
    | "JT"
    | "Katakana"
    | "LE"
    | "LF"
    | "MidLetter"
    | "MidNum"
    | "MidNumLet"
    | "Newline"
    | "NL"
    | "NU"
    | "Other"
    | "Perl_CR"
    | "Perl_LF"
    | "RI"
    | "SA"
    | "SG"
    | "SP"
    | "STerm"
    | "WSegSpace"
    | (string & {});
}

export const AUXILIARY_WORD_BREAK_PROPERTY_FIELDS = ["code_point", "word_break"];
