/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/HangulSyllableType.txt#L11-L14
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:31.549Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range explicitly listed for Hangul_Syllable_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/HangulSyllableType.txt#L11-L14
   */
  code_point: string;

  /**
   * Value of the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/HangulSyllableType.txt#L11
   */
  hangul_syllable_type: "Leading_Jamo" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point", "hangul_syllable_type"];
