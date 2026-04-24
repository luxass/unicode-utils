/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/HangulSyllableType.txt#L11-L14
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:48.837Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range explicitly listed for the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/HangulSyllableType.txt#L11-L14
   */
  codepoint: string;

  /**
   * Value of the Hangul_Syllable_Type property; unlisted code points have default value Not_Applicable.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/HangulSyllableType.txt#L11-L14
   */
  hangul_syllable_type: "Leading_Jamo" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["codepoint", "hangul_syllable_type"];
