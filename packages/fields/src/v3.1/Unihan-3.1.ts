/**
 * Parsed row from `Unihan-3.1.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/Unihan-3.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/Unihan-3.1.txt#L30-L34
 *
 * @unicodeVersion 3.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:36:53.549Z
 */
export interface Unihan31 {
  /**
   * Unicode scalar value as U+xxxx or U+xxxxx (four or five hex digits).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/Unihan-3.1.txt#L30-L33
   */
  codepoint: string;

  /**
   * Tag indicating the type of information in the value field.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/Unihan-3.1.txt#L30-L34
   */
  tag: string;

  /**
   * The line's value in UTF-8.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/Unihan-3.1.txt#L30-L34
   */
  value: string;
}

export const UNIHAN_31_FIELDS = ["codepoint", "tag", "value"];
