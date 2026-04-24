/**
 * Parsed row from `Jamo-1.txt` (Unicode 2).
 *
 * @see https://unicode.org/Public/2.0-Update/Jamo-1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/2.0-Update/Jamo-1.txt#L1
 *
 * @unicodeVersion 2
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:49.822Z
 */
export interface Jamo1 {
  /**
   * Value.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Jamo-1.txt#L1
   */
  value: string;

  /**
   * Short Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Jamo-1.txt#L1
   */
  short_name: string;

  /**
   * Unicode Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Jamo-1.txt#L1
   */
  unicode_name: string;
}

export const JAMO_1_FIELDS = ["value", "short_name", "unicode_name"];
