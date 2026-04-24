/**
 * Parsed row from `SpecialCasing-3.txt` (Unicode 3.0.1).
 *
 * @see https://unicode.org/Public/3.0-Update1/SpecialCasing-3.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L18
 * - https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L20
 * - https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L24-L26
 *
 * @unicodeVersion 3.0.1
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:20.274Z
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
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L18
   */
  condition_list: string;

  /**
   * Optional comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update1/SpecialCasing-3.txt#L18
   */
  comment: string;
}

export const SPECIAL_CASING_3_FIELDS = [
  "source",
  "lower",
  "title",
  "upper",
  "condition_list",
  "comment",
];
