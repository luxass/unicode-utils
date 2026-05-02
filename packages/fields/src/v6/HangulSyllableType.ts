/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:55:25.441Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Hangul_Syllable_Type property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  hangul_syllable_type: "L" | "V" | "T" | "LV" | "LVT" | "NA";
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point", "hangul_syllable_type"];
