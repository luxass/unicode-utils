/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/HangulSyllableType.txt#L12-L15
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:49.107Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point range with the specified Hangul_Syllable_Type value.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/HangulSyllableType.txt#L12
   */
  codepoint_range: string;

  /**
   * Value of the Hangul_Syllable_Type property; defaults to Not_Applicable (NA) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/HangulSyllableType.txt#L12-L15
   */
  hangul_syllable_type: "Leading_Jamo" | "Not_Applicable" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["codepoint_range", "hangul_syllable_type"];
