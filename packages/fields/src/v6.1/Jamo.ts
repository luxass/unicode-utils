/**
 * Parsed row from `Jamo.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/Jamo.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/Jamo.txt#L16-L21
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:08.594Z
 */
export interface Jamo {
  /**
   * Code point, in 4-digit hexadecimal form, of a conjoining jamo character that participates in the algorithmic determination of Hangul syllable character names.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/Jamo.txt#L16-L18
   */
  code_point: string;

  /**
   * Jamo_Short_Name as a one-, two-, or three-character ASCII string (or the null string).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/Jamo.txt#L19-L21
   */
  jamo_short_name: string;
}

export const JAMO_FIELDS = ["code_point", "jamo_short_name"];
