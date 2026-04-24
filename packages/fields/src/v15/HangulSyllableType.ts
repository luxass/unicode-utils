/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/HangulSyllableType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/HangulSyllableType.txt#L14-L15
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:19:21.275Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point range or single code point explicitly listed for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/HangulSyllableType.txt#L14-L15
   */
  code_point_range: string;

  /**
   * Value of the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/HangulSyllableType.txt#L12
   */
  hangul_syllable_type:
    | "Leading_Jamo"
    | "Trailing_Jamo"
    | "Vowel_Jamo"
    | "Syllable"
    | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point_range", "hangul_syllable_type"];
