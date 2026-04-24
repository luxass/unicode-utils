/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/HangulSyllableType.txt#L12-L15
 *
 * @unicodeVersion 16
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:01.624Z
 */
export interface HangulSyllableType {
  /**
   * Value of the Hangul_Syllable_Type property; defaults to Not_Applicable (NA) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/HangulSyllableType.txt#L12-L15
   */
  hangul_syllable_type: "Leading_Jamo" | "Not_Applicable" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["hangul_syllable_type"];
