/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/HangulSyllableType.txt#L12-L15
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/HangulSyllableType.txt#L21
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:59.286Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range explicitly listed for Hangul_Syllable_Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/HangulSyllableType.txt#L12-L15
   */
  code_point: string;

  /**
   * Value of the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/HangulSyllableType.txt#L21
   */
  hangul_syllable_type: string;
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point", "hangul_syllable_type"];
