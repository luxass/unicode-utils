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
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:42.142Z
 */
export interface Jamo1 {
  /**
   * Value.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Jamo-1.txt#L1
   */
  field_0: string;

  /**
   * Short Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Jamo-1.txt#L1
   */
  field_1: string;

  /**
   * Unicode Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Jamo-1.txt#L1
   */
  field_2: string;
}

export const JAMO_1_FIELDS = ["field_0", "field_1", "field_2"];
