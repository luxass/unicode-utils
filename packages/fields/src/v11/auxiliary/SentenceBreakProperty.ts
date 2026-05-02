/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:04.861Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Unicode code point or range (implied by standard UCD format documented in UAX #44).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Sentence_Break property value; unlisted code points have value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
   */
  sentence_break: "Other" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point_range", "sentence_break"];
