/**
 * Parsed row from `SpecialCasing-2.txt` (Unicode 2.1.9).
 *
 * @see https://unicode.org/Public/2.1-Update4/SpecialCasing-2.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L22
 * - https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L24-L26
 * - https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L32
 *
 * @unicodeVersion 2.1.9
 * @fields 5
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:58:02.425Z
 */
export interface SpecialCasing2 {
  /**
   * Source code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L22
   */
  source: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L24
   */
  lower: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L25
   */
  title: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L26
   */
  upper: string;

  /**
   * Optional condition list for locale-specific or context-specific mappings.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L32
   */
  condition_list: string;
}

export const SPECIAL_CASING_2_FIELDS = ["source", "lower", "title", "upper", "condition_list"];
