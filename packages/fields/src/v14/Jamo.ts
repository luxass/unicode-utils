/**
 * Parsed row from `Jamo.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/Jamo.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/Jamo.txt#L16-L21
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:46.190Z
 */
export interface Jamo {
  /**
   * 4-digit hexadecimal form of a conjoining jamo character that participates in the algorithmic determination of Hangul syllable character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/Jamo.txt#L16-L18
   */
  code_point: string;

  /**
   * Jamo_Short_Name as a one-, two-, or three-character ASCII string (or the null string for U+110B).
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/Jamo.txt#L19-L21
   */
  jamo_short_name: "" | string;
}

export const JAMO_FIELDS = ["code_point", "jamo_short_name"];
