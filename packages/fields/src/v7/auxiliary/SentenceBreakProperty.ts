/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:01.840Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Sentence_Break property value; defaults to Other (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L11-L14
   */
  sentence_break: "CR" | "LF" | "Extend" | "Sp" | "Sep" | "Format" | "STerm" | "ATerm" | "Lower" | "Upper" | "OLetter" | "Numeric" | "Other" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point", "sentence_break"];
