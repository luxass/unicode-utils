/**
 * Parsed row from `Jamo.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/Jamo.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/Jamo.txt#L16-L21
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:15.849Z
 */
export interface Jamo {
  /**
   * 4-digit hexadecimal code point of a conjoining jamo character.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/Jamo.txt#L16-L18
   */
  code_point: string;

  /**
   * Jamo_Short_Name as a one-, two-, or three-character ASCII string (or null string for U+110B).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/Jamo.txt#L19-L21
   */
  jamo_short_name: "" | string;
}

export const JAMO_FIELDS = ["code_point", "jamo_short_name"];
