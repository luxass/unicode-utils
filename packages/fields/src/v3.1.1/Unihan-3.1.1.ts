/**
 * Parsed row from `Unihan-3.1.1.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/Unihan-3.1.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update1/Unihan-3.1.1.txt#L30-L34
 *
 * @unicodeVersion 3.1.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:02.111Z
 */
export interface Unihan311 {
  /**
   * The Unicode scalar value as U+[x]xxxx (that is, there are either four or five hex digits)
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/Unihan-3.1.1.txt#L30-L32
   */
  unicode_scalar_value: string;

  /**
   * A tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/Unihan-3.1.1.txt#L33
   */
  tag: string;

  /**
   * The line's value (in UTF-8)
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/Unihan-3.1.1.txt#L34
   */
  value: string;
}

export const UNIHAN_311_FIELDS = ["unicode_scalar_value", "tag", "value"];
