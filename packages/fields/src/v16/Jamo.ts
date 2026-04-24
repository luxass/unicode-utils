/**
 * Parsed row from `Jamo.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/Jamo.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Jamo.txt#L15-L22
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:13.350Z
 */
export interface Jamo {
  /**
   * Code point in 4-digit hexadecimal form of a conjoining jamo character.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Jamo.txt#L15-L22
   */
  code_point: string;

  /**
   * Jamo_Short_Name as a one-, two-, or three-character ASCII string (or null string for U+110B).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Jamo.txt#L15-L22
   */
  jamo_short_name: string;
}

export const JAMO_FIELDS = ["code_point", "jamo_short_name"];
