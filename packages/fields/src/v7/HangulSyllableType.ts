/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/HangulSyllableType.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/HangulSyllableType.txt#L20
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:34.178Z
 */
export interface HangulSyllableType {
  /**
   * Code point range explicitly listed for the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/HangulSyllableType.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Value of the Hangul_Syllable_Type property; all unlisted code points have value Not_Applicable (NA).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/HangulSyllableType.txt#L20
   */
  hangul_syllable_type: "Leading_Jamo" | "Not_Applicable";
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point_range", "hangul_syllable_type"];
