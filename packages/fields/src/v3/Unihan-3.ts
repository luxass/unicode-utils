/**
 * Parsed row from `Unihan-3.txt` (Unicode 3).
 *
 * @see https://unicode.org/Public/3.0-Update/Unihan-3.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update/Unihan-3.txt#L31-L33
 *
 * @unicodeVersion 3
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T05:10:24.415Z
 */
export interface Unihan3 {
  /**
   * The Unicode value as U+xxxx
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Unihan-3.txt#L31
   */
  unicode_value: string;

  /**
   * A tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Unihan-3.txt#L32
   */
  tag: string;

  /**
   * The line's value
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Unihan-3.txt#L33
   */
  value: string;
}

export const UNIHAN_3_FIELDS = ["unicode_value", "tag", "value"];
