/**
 * Parsed row from `SpecialCasing-2.txt` (Unicode 3).
 *
 * @see https://unicode.org/Public/3.0-Update/SpecialCasing-2.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update/SpecialCasing-2.txt#L18
 * - https://ucdjs.dev/file-explorer/v/3.0-Update/SpecialCasing-2.txt#L20
 * - https://ucdjs.dev/file-explorer/v/3.0-Update/SpecialCasing-2.txt#L24-L26
 *
 * @unicodeVersion 3
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T05:10:28.128Z
 */
export interface SpecialCasing2 {
  /**
   * Source code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/SpecialCasing-2.txt#L20
   */
  source: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/SpecialCasing-2.txt#L24
   */
  lower: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/SpecialCasing-2.txt#L25
   */
  title: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/SpecialCasing-2.txt#L26
   */
  upper: string;

  /**
   * Optional condition list of locales and contexts.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/SpecialCasing-2.txt#L18
   */
  condition_list: string;

  /**
   * Optional comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/SpecialCasing-2.txt#L18
   */
  comment: string;
}

export const SPECIAL_CASING_2_FIELDS = ["source", "lower", "title", "upper", "condition_list", "comment"];
