/**
 * Parsed row from `Jamo-2.txt` (Unicode 3).
 *
 * @see https://unicode.org/Public/3.0-Update/Jamo-2.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update/Jamo-2.txt#L1
 *
 * @unicodeVersion 3
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T05:10:19.036Z
 */
export interface Jamo2 {
  /**
   * Value field.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Jamo-2.txt#L1
   */
  value: string;

  /**
   * Short Name field.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Jamo-2.txt#L1
   */
  short_name: string;

  /**
   * Unicode Name field.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Jamo-2.txt#L1
   */
  unicode_name: string;
}

export const JAMO_2_FIELDS = ["value", "short_name", "unicode_name"];
