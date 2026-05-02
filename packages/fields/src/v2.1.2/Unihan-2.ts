/**
 * Parsed row from `Unihan-2.txt` (Unicode 2.1.2).
 *
 * @see https://unicode.org/Public/2.1-Update/Unihan-2.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/2.1-Update/Unihan-2.txt#L32-L34
 *
 * @unicodeVersion 2.1.2
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T05:11:03.459Z
 */
export interface Unihan2 {
  /**
   * The Unicode value as U+xxxx
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update/Unihan-2.txt#L32
   */
  unicode_value: string;

  /**
   * A tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update/Unihan-2.txt#L33
   */
  tag: string;

  /**
   * The line's value
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update/Unihan-2.txt#L34
   */
  value: string;
}

export const UNIHAN_2_FIELDS = ["unicode_value", "tag", "value"];
