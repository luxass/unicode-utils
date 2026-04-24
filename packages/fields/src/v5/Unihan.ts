/**
 * Parsed row from `Unihan.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/Unihan.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Unihan.txt#L14-L17
 *
 * @unicodeVersion 5
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:19.539Z
 */
export interface Unihan {
  /**
   * Unicode scalar value as U+[x]xxxx with four or five hex digits.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Unihan.txt#L14-L17
   */
  unicode_scalar_value: string;

  /**
   * Tag indicating the type of information in the value field.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Unihan.txt#L14-L17
   */
  tag: string;

  /**
   * Line's value in UTF-8 corresponding to the tag.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Unihan.txt#L14-L17
   */
  value: string;
}

export const UNIHAN_FIELDS = ["unicode_scalar_value", "tag", "value"];
