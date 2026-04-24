/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/HangulSyllableType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/HangulSyllableType.txt#L21
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:57.476Z
 */
export interface HangulSyllableType {
  /**
   * Hangul_Syllable_Type=Leading_Jamo.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/HangulSyllableType.txt#L21
   */
  code_point: string;

  /**
   * Value of the Hangul_Syllable_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/HangulSyllableType.txt#L12
   */
  hangul_syllable_type: "Leading_Jamo" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point", "hangul_syllable_type"];
