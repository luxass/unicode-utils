/**
 * Parsed row from `Unihan.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/Unihan.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Unihan.txt#L14-L17
 *
 * @unicodeVersion 4.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:32.823Z
 */
export interface Unihan {
  /**
   * Unicode scalar value as U+[x]xxxx (four or five hex digits).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Unihan.txt#L14-L15
   */
  codepoint: string;

  /**
   * Tag indicating the type of information in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Unihan.txt#L16
   */
  tag: string;

  /**
   * The line's value (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/Unihan.txt#L17
   */
  value: string;
}

export const UNIHAN_FIELDS = ["codepoint", "tag", "value"];
