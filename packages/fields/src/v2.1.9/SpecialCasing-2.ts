/**
 * Parsed row from `SpecialCasing-2.txt` (Unicode 2.1.9).
 *
 * @see https://unicode.org/Public/2.1-Update4/SpecialCasing-2.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L18
 * - https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L20
 * - https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L24-L26
 *
 * @unicodeVersion 2.1.9
 * @fields 5
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:46.012Z
 */
export interface SpecialCasing2 {
  /**
   * Source code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L20
   */
  source: string;

  /**
   * Lowercase code point list.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L24
   */
  lower: string;

  /**
   * Titlecase code point list.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L25
   */
  title: string;

  /**
   * Uppercase code point list.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L26
   */
  upper: string;

  /**
   * Optional condition list of locales and contexts.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/SpecialCasing-2.txt#L18
   */
  condition_list: string;
}

export const SPECIAL_CASING_2_FIELDS = ["source", "lower", "title", "upper", "condition_list"];
