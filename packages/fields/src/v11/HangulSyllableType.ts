/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/HangulSyllableType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/HangulSyllableType.txt#L21
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:59.943Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point range explicitly listed for a specific Hangul_Syllable_Type value.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/HangulSyllableType.txt#L21
   */
  code_point_range: string;

  /**
   * Value of the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/HangulSyllableType.txt#L12
   */
  hangul_syllable_type: "Leading_Jamo" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point_range", "hangul_syllable_type"];
