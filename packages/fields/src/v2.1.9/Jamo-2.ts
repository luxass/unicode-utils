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
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:37.718Z
 */
export interface Jamo2 {
  /**
   * Value
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Jamo-2.txt#L1
   */
  field_1: string;

  /**
   * Short Name
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Jamo-2.txt#L1
   */
  field_2: string;

  /**
   * Unicode Name
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Jamo-2.txt#L1
   */
  field_3: string;
}

export const JAMO_2_FIELDS = ["field_1", "field_2", "field_3"];
