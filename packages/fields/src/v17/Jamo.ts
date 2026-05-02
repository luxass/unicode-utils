/**
 * Parsed row from `Jamo.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/Jamo.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Jamo.txt#L15-L22
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:43.430Z
 */
export interface Jamo {
  /**
   * 4-digit hexadecimal code point of a conjoining jamo character.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Jamo.txt#L15-L20
   */
  code_point: string;

  /**
   * Jamo_Short_Name as a one-, two-, or three-character ASCII string (or null string for U+110B).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Jamo.txt#L15-L22
   */
  jamo_short_name: "" | (string & {});
}

export const JAMO_FIELDS = ["code_point", "jamo_short_name"];
