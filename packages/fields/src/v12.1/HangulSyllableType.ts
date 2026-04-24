/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/HangulSyllableType.txt#L12-L15
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:38.219Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range explicitly listed for the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/HangulSyllableType.txt#L12
   */
  codepoint: string;

  /**
   * Value of the Hangul_Syllable_Type property (defaults to Not_Applicable for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/HangulSyllableType.txt#L12-L15
   */
  hangul_syllable_type: string;
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["codepoint", "hangul_syllable_type"];
