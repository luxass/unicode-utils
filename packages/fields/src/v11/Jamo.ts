/**
 * Parsed row from `Jamo.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/Jamo.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/Jamo.txt#L16-L21
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:58.442Z
 */
export interface Jamo {
  /**
   * The code point, in 4-digit hexadecimal form, of a conjoining jamo character that participates in the algorithmic determination of Hangul syllable character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/Jamo.txt#L16-L18
   */
  code_point: string;

  /**
   * The Jamo_Short_Name as a one-, two-, or three-character ASCII string (or in one case, for U+110B, the null string).
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/Jamo.txt#L19-L21
   */
  jamo_short_name: string;
}

export const JAMO_FIELDS = ["code_point", "jamo_short_name"];
