/**
 * Parsed row from `Unihan.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/Unihan.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Unihan.txt#L13-L17
 *
 * @unicodeVersion 4.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:26.052Z
 */
export interface Unihan {
  /**
   * The Unicode scalar value as U+[x]xxxx (that is, there are either four or five hex digits).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Unihan.txt#L13-L16
   */
  codepoint: string;

  /**
   * A tag indicating the type of information in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Unihan.txt#L13-L17
   */
  tag: string;

  /**
   * The line's value (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Unihan.txt#L13-L17
   */
  value: string;
}

export const UNIHAN_FIELDS = ["codepoint", "tag", "value"];
