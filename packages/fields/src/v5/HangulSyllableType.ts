/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/HangulSyllableType.txt#L11-L14
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:56:53.947Z
 */
export interface HangulSyllableType {
  /**
   * Code point range explicitly listed for the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/HangulSyllableType.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Value of the Hangul_Syllable_Type property; Not_Applicable for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/HangulSyllableType.txt#L11-L14
   */
  hangul_syllable_type: "Leading_Jamo" | "Not_Applicable";
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point_range", "hangul_syllable_type"];
