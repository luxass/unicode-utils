/**
 * Parsed row from `HangulSyllableType-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/HangulSyllableType-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/HangulSyllableType-4.0.1.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:35:50.550Z
 */
export interface HangulSyllableType401 {
  /**
   * Code point range or single code point explicitly listed for the property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Value of the Hangul_Syllable_Type property. Default Not_Applicable (NA) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/HangulSyllableType-4.0.1.txt#L11-L14
   */
  hangul_syllable_type:
    | "Leading_Jamo"
    | "Trailing_Jamo"
    | "Vowel_Jamo"
    | "Syllable"
    | "Not_Applicable"
    | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_401_FIELDS = ["code_point_range", "hangul_syllable_type"];
