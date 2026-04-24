/**
 * Parsed row from `Unihan.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/Unihan.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Unihan.txt#L13-L17
 *
 * @unicodeVersion 5
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:00.835Z
 */
export interface Unihan {
  /**
   * The Unicode scalar value as U+xxxx or U+xxxxx (four or five hex digits).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Unihan.txt#L13-L17
   */
  codepoint: string;

  /**
   * A tag indicating the type of information in the value field.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Unihan.txt#L13-L17
   */
  tag: string;

  /**
   * The line's value (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/Unihan.txt#L13-L17
   */
  value: string;
}

export const UNIHAN_FIELDS = ["codepoint", "tag", "value"];
