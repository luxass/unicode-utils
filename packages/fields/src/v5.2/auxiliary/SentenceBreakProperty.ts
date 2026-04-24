/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/auxiliary/SentenceBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:43.274Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range per standard UCD property file format documented in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Sentence_Break property value; unlisted code points have value Other.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/auxiliary/SentenceBreakProperty.txt#L11-L14
   */
  sentence_break: "CR" | "LF" | "Extend" | "Sp" | "Sep" | "STerm" | "ATerm" | "Lower" | "Upper" | "OLetter" | "Numeric" | "Other" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
