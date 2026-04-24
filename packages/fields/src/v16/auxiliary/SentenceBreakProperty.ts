/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:20.796Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range (first field in standard UCD format documented in UAX #44).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Sentence_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12
   */
  sentence_break:
    | "AT"
    | "CL"
    | "CR"
    | "EX"
    | "FO"
    | "HY"
    | "IN"
    | "LF"
    | "LO"
    | "NU"
    | "PO"
    | "PR"
    | "SA"
    | "SC"
    | "SE"
    | "SP"
    | "ST"
    | "UP"
    | "XX"
    | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
