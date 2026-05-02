/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/HangulSyllableType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/HangulSyllableType.txt#L14-L15
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:39.700Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range explicitly listed for the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/HangulSyllableType.txt#L14-L15
   */
  code_point_range: string;

  /**
   * Value of the Hangul_Syllable_Type property; unlisted code points have default value Not_Applicable.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/HangulSyllableType.txt#L12
   */
  hangul_syllable_type: "Leading_Jamo" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point_range", "hangul_syllable_type"];
