/**
 * Parsed row from `auxiliary/SentenceBreakProperty.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/auxiliary/SentenceBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:39:23.092Z
 */
export interface AuxiliarySentenceBreakProperty {
  /**
   * Code point range in the standard UCD format (e.g. '0041' or '1F600..1F64F').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Sentence_Break property value; Other (XX) for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/auxiliary/SentenceBreakProperty.txt#L12-L15
   */
  sentence_break: "Other" | (string & {});
}

export const AUXILIARY_SENTENCE_BREAK_PROPERTY_FIELDS = ["code_point_range", "sentence_break"];
