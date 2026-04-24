/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:02:04.258Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range to which the Hangul_Syllable_Type property value applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Hangul_Syllable_Type property (e.g. Leading_Jamo, Not_Applicable).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  hangul_syllable_type: string;
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point", "hangul_syllable_type"];
