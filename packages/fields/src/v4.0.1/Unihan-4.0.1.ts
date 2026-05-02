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
 * @generated 2026-04-28T04:53:49.862Z
 */
export interface Unihan401 {
  /**
   * The Unicode scalar value as U+[x]xxxx (that is, there are either four or five hex digits)
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/Unihan-4.0.1.txt#L37-L39
   */
  codepoint: string;

  /**
   * A tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/Unihan-4.0.1.txt#L40
   */
  tag: string;

  /**
   * The line's value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/Unihan-4.0.1.txt#L41
   */
  value: string;
}

export const UNIHAN_401_FIELDS = ["codepoint", "tag", "value"];
