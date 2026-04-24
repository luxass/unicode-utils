/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:31:01.465Z
 */
export interface HangulSyllableType {
  /**
   * Hexadecimal Unicode code point or range (e.g. 'AC00' or '1100..115F').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Hangul_Syllable_Type property such as Leading_Jamo.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  hangul_syllable_type: string;
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point", "hangul_syllable_type"];
