/**
 * Parsed row from `Unihan-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/Unihan-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/Unihan-4.0.1.txt#L37-L41
 *
 * @unicodeVersion 4.0.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:36:38.943Z
 */
export interface Unihan401 {
  /**
   * Unicode scalar value as U+[x]xxxx (four or five hex digits).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/Unihan-4.0.1.txt#L37-L39
   */
  codepoint: string;

  /**
   * Tag indicating the type of information in the value field.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/Unihan-4.0.1.txt#L40
   */
  tag: string;

  /**
   * Line's value (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/Unihan-4.0.1.txt#L41
   */
  value: string;
}

export const UNIHAN_401_FIELDS = ["codepoint", "tag", "value"];
