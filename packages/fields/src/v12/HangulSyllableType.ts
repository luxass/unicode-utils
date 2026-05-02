/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/HangulSyllableType.txt#L12
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:30.489Z
 */
export interface HangulSyllableType {
  /**
   * Code point range explicitly listed for the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/HangulSyllableType.txt#L12
   */
  code_point_range: string;

  /**
   * Value of the Hangul_Syllable_Type property for the listed code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/HangulSyllableType.txt#L12
   */
  hangul_syllable_type: "Leading_Jamo" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point_range", "hangul_syllable_type"];
