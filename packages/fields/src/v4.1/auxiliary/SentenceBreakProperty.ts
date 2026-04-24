/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/auxiliary/SentenceBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:38.459Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range (first field in standard short-form property files per UAX #44).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Sentence_Break property value; unlisted code points have default value Other.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/auxiliary/SentenceBreakProperty.txt#L11-L14
   */
  sentence_break: "CR" | "LF" | "Extend" | "Sp" | "Sep" | "Format" | "STerm" | "ATerm" | "Lower" | "Numeric" | "OLetter" | "Upper" | "Other" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
