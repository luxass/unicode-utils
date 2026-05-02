/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/HangulSyllableType.txt#L11
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/HangulSyllableType.txt#L13
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:15.859Z
 */
export interface HangulSyllableType {
  /**
   * Code point or code point range explicitly listed for the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/HangulSyllableType.txt#L13
   */
  code_point: string;

  /**
   * Value of the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/HangulSyllableType.txt#L11
   */
  hangul_syllable_type: "Leading_Jamo" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point", "hangul_syllable_type"];
