/**
 * Parsed row from `Jamo-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/Jamo-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/Jamo-3.2.0.txt#L15-L20
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:21.602Z
 */
export interface Jamo320 {
  /**
   * The code point, in 4-digit hexadecimal form, of a combining jamo character that participates in the algorithmic determination Hangul syllable character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/Jamo-3.2.0.txt#L15-L17
   */
  code_point: string;

  /**
   * The Jamo Short Name as a one-, two-, or three-character ASCII string (or in one case, for U+110B, the null string).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/Jamo-3.2.0.txt#L18-L20
   */
  jamo_short_name: string;
}

export const JAMO_320_FIELDS = ["code_point", "jamo_short_name"];
