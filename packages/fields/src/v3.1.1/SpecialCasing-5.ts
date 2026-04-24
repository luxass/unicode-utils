/**
 * Parsed row from `SpecialCasing-5.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/SpecialCasing-5.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17
 *
 * @unicodeVersion 3.1.1
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:47.305Z
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

  /**
   * Trailing comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/SpecialCasing-5.txt#L17
   */
  comment: string;
}

export const SPECIAL_CASING_5_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
