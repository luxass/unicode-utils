/**
 * Parsed row from `Unihan-1.txt` (Unicode 2).
 *
 * @see https://unicode.org/Public/2.0-Update/Unihan-1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/2.0-Update/Unihan-1.txt#L32-L34
 *
 * @unicodeVersion 2
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:53.886Z
 */
export interface Unihan1 {
  /**
   * The Unicode value as U+xxxx
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Unihan-1.txt#L32
   */
  unicode_value: string;

  /**
   * A tag indicating the type of information in the third field
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Unihan-1.txt#L33
   */
  tag: string;

  /**
   * The line's value
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Unihan-1.txt#L34
   */
  value: string;
}

export const UNIHAN_1_FIELDS = ["unicode_value", "tag", "value"];
