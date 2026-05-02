/**
 * Parsed row from `Jamo-3.txt` (Unicode 3.0.1).
 *
 * @see https://unicode.org/Public/3.0-Update1/Jamo-3.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update1/Jamo-3.txt#L15-L20
 *
 * @unicodeVersion 3.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:17.624Z
 */
export interface Jamo3 {
  /**
   * The code point, in 4-digit hexadecimal form, of a combining jamo character that participates in the algorithmic determination Hangul syllable character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/Jamo-3.txt#L15-L17
   */
  code_point: string;

  /**
   * The Jamo Short Name as a one-, two-, or three-character ASCII string (or in one case, for U+110B, the null string).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/Jamo-3.txt#L18-L20
   */
  jamo_short_name: string;
}

export const JAMO_3_FIELDS = ["code_point", "jamo_short_name"];
