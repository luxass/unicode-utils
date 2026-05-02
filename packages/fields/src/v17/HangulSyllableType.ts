/**
 * Parsed row from `HangulSyllableType.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/HangulSyllableType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:41:48.122Z
 */
export interface HangulSyllableType {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Hangul syllable type property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  hangul_syllable_type: "L" | "V" | "T" | "LV" | "LVT" | "NA";
}

export const HANGUL_SYLLABLE_TYPE_FIELDS = ["code_point_range", "hangul_syllable_type"];
