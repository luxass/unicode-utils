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
 * @generated 2026-04-23T18:55:06.679Z
 */
export interface Jamo3 {
  /**
   * 4-digit hexadecimal code point of a combining jamo character.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/Jamo-3.txt#L15-L17
   */
  code_point: string;

  /**
   * Jamo Short Name as a one-, two-, or three-character ASCII string (or null string for U+110B).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/Jamo-3.txt#L18-L20
   */
  jamo_short_name: string;
}

export const JAMO_3_FIELDS = ["code_point", "jamo_short_name"];
