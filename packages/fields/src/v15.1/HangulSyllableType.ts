/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/HangulSyllableType.txt#L14-L15
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/HangulSyllableType.txt#L21
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:40:53.542Z
 */
export interface HangulSyllableType {
  /**
   * Code point or range explicitly listed for Hangul_Syllable_Type (all others are Not_Applicable per default).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/HangulSyllableType.txt#L14-L15
   */
  code_point_range: string;

  /**
   * Value of the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/HangulSyllableType.txt#L21
   */
  hangul_syllable_type: "Leading_Jamo";
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point_range", "hangul_syllable_type"];
