/**
 * Parsed row from `Jamo.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/Jamo.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/Jamo.txt#L14-L21
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:51.037Z
 */
export interface Jamo {
  /**
   * Code point, in 4-digit hexadecimal form, of a combining jamo character.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/Jamo.txt#L14-L21
   */
  code_point: string;

  /**
   * Jamo Short Name as a one-, two-, or three-character ASCII string (or the null string).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/Jamo.txt#L14-L21
   */
  jamo_short_name: string;
}

export const JAMO_FIELDS = ["code_point", "jamo_short_name"];
