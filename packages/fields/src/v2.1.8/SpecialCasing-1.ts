/**
 * Parsed row from `SpecialCasing-1.txt` (Unicode 2.1.8).
 *
 * @see https://unicode.org/Public/2.1-Update3/SpecialCasing-1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/2.1-Update3/SpecialCasing-1.txt#L18
 * - https://ucdjs.dev/file-explorer/v/2.1-Update3/SpecialCasing-1.txt#L20
 * - https://ucdjs.dev/file-explorer/v/2.1-Update3/SpecialCasing-1.txt#L25-L27
 *
 * @unicodeVersion 2.1.8
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:55.373Z
 */
export interface SpecialCasing1 {
  /**
   * Source code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update3/SpecialCasing-1.txt#L20
   */
  source: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update3/SpecialCasing-1.txt#L25
   */
  lower: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update3/SpecialCasing-1.txt#L26
   */
  title: string;

  /**
   * = <code_point_list>.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update3/SpecialCasing-1.txt#L27
   */
  upper: string;

  /**
   * <entry> := <case_mapping> <condition_list>?
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update3/SpecialCasing-1.txt#L18
   */
  condition_list: string;

  /**
   * Optional comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update3/SpecialCasing-1.txt#L18
   */
  comment: string;
}

export const SPECIAL_CASING_1_FIELDS = ["source", "lower", "title", "upper", "condition_list", "comment"];
