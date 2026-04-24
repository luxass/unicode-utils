/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/HangulSyllableType.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/HangulSyllableType.txt#L20
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:33:21.339Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range explicitly listed for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/HangulSyllableType.txt#L11-L14
   */
  code_point: string;

  /**
   * Value of the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/HangulSyllableType.txt#L20
   */
  hangul_syllable_type: "Leading_Jamo" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point", "hangul_syllable_type"];
