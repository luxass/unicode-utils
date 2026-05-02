/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:41:37.548Z
 */
export interface HangulSyllableType {
  /**
   * Hexadecimal code point or range to which the Hangul_Syllable_Type applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Hangul syllable type property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  hangul_syllable_type: "Leading_Jamo" | "Not_Applicable" | (string & {});
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point", "hangul_syllable_type"];
