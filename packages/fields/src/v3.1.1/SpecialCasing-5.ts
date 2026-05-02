/**
 * Parsed row from `SpecialCasing-5.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/SpecialCasing-5.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17
 *
 * @unicodeVersion 3.1.1
 * @fields 5
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:57:48.686Z
 */
export interface SpecialCasing5 {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17
   */
  code: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17
   */
  lower: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17
   */
  title: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17
   */
  upper: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17
   */
  condition_list: string;
}

export const SPECIAL_CASING_5_FIELDS = ["code", "lower", "title", "upper", "condition_list"];
