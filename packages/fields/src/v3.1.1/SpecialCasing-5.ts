/**
 * Parsed row from `SpecialCasing-5.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/SpecialCasing-5.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17-L26
 *
 * @unicodeVersion 3.1.1
 * @fields 5
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:58.335Z
 */
export interface SpecialCasing5 {
  /**
   * Unicode code point(s) in hex.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17-L20
   */
  code: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17-L20
   */
  lower: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17-L20
   */
  title: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17-L20
   */
  upper: string;

  /**
   * Optional condition list of locales/contexts.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17-L26
   */
  condition_list: string;
}

export const SPECIAL_CASING_5_FIELDS = ["code", "lower", "title", "upper", "condition_list"];
