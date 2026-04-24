/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:34:54.864Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range per standard UCD format documented in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Sentence_Break property value; all unlisted code points have value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
   */
  sentence_break:
    | "ATerm"
    | "Buffer"
    | "Close"
    | "CR"
    | "Extend"
    | "Format"
    | "LF"
    | "Lower"
    | "Numeric"
    | "OLetter"
    | "Other"
    | "Sep"
    | "Sp"
    | "STerm"
    | "Upper"
    | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
