/**
 * Parsed row from `SpecialCasing-3.txt` (Unicode 3.0.1).
 *
 * @see https://unicode.org/Public/3.0-Update1/SpecialCasing-3.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L20
 * - https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L24-L26
 * - https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L32
 *
 * @unicodeVersion 3.0.1
 * @fields 5
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:08.703Z
 */
export interface SpecialCasing3 {
  /**
   * Source code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L20
   */
  source: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L24
   */
  lower: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L25
   */
  title: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L26
   */
  upper: string;

  /**
   * Optional condition list of locales and contexts.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L32
   */
  condition_list: string;
}

export const SPECIAL_CASING_3_FIELDS = ["source", "lower", "title", "upper", "condition_list"];
