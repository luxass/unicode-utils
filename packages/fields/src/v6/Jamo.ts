/**
 * Parsed row from `Jamo.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/Jamo.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/Jamo.txt#L14-L21
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:35.565Z
 */
export interface Jamo {
  /**
   * Code point, in 4-digit hexadecimal form, of a combining jamo character.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/Jamo.txt#L14-L18
   */
  code_point: string;

  /**
   * Jamo Short Name as a one-, two-, or three-character ASCII string (or null string for U+110B).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/Jamo.txt#L14-L21
   */
  jamo_short_name: string;
}

export const JAMO_FIELDS = ["code_point", "jamo_short_name"];
