/**
 * Parsed row from `Jamo.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/Jamo.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Jamo.txt#L17-L22
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:11.266Z
 */
export interface Jamo {
  /**
   * 4-digit hexadecimal form of a conjoining jamo character that participates in the algorithmic determination of Hangul syllable character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Jamo.txt#L17-L19
   */
  code_point: string;

  /**
   * Jamo_Short_Name as a one-, two-, or three-character ASCII string (or the null string for U+110B).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Jamo.txt#L20-L22
   */
  jamo_short_name: string;
}

export const JAMO_FIELDS = ["code_point", "jamo_short_name"];
