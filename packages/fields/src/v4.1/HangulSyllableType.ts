/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/HangulSyllableType.txt#L11-L14
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:53.467Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range explicitly listed for the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/HangulSyllableType.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Value of the Hangul_Syllable_Type property (default Not_Applicable for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/HangulSyllableType.txt#L11-L14
   */
  hangul_syllable_type: "Leading_Jamo" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point_range", "hangul_syllable_type"];
