/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/HangulSyllableType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/HangulSyllableType.txt#L14
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:48.322Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range explicitly listed for Hangul_Syllable_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/HangulSyllableType.txt#L14
   */
  code_point_range: string;

  /**
   * Value of the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/HangulSyllableType.txt#L12
   */
  hangul_syllable_type: "Leading_Jamo" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point_range", "hangul_syllable_type"];
