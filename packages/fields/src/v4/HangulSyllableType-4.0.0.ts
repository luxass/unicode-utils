/**
 * Parsed row from `HangulSyllableType-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/HangulSyllableType-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/HangulSyllableType-4.0.0.txt#L12-L14
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:04.094Z
 */
export interface HangulSyllableType400 {
  /**
   * Unicode code point or range explicitly listed in this file.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/HangulSyllableType-4.0.0.txt#L12-L14
   */
  codepoint_range: string;

  /**
   * Hangul Syllable Type property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/HangulSyllableType-4.0.0.txt#L12-L14
   */
  hangul_syllable_type: "NA" | "L" | "V" | "T" | "LV" | "LVT";
}

export const HANGUL_SYLLABLE_TYPE_400_FIELDS = ["codepoint_range", "hangul_syllable_type"];
