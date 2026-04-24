/**
 * Parsed row from `Jamo-2.txt` (Unicode 2.1.9).
 *
 * @see https://unicode.org/Public/2.1-Update4/Jamo-2.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/2.1-Update4/Jamo-2.txt#L1
 *
 * @unicodeVersion 2.1.9
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:39.675Z
 */
export interface Jamo2 {
  /**
   * Value.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Jamo-2.txt#L1
   */
  value: string;

  /**
   * Short Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Jamo-2.txt#L1
   */
  short_name: string;

  /**
   * Unicode Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Jamo-2.txt#L1
   */
  unicode_name: string;
}

export const JAMO_2_FIELDS = ["value", "short_name", "unicode_name"];
