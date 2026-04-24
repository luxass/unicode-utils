/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:53:19.635Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Hangul_Syllable_Type property; unlisted code points default to Not_Applicable.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  hangul_syllable_type: "Leading_Jamo" | "Not_Applicable" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point", "hangul_syllable_type"];
