/**
 * Parsed row from `Jamo.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/Jamo.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Jamo.txt#L17-L22
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:09.380Z
 */
export interface Jamo {
  /**
   * Code point, in 4-digit hexadecimal form, of a conjoining jamo character.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Jamo.txt#L17-L19
   */
  code_point: string;

  /**
   * Jamo_Short_Name as a one-, two-, or three-character ASCII string (or null string for U+110B).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/Jamo.txt#L20-L22
   */
  jamo_short_name: string;
}

export const JAMO_FIELDS = ["code_point", "jamo_short_name"];
