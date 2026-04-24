/**
 * Parsed row from `SpecialCasing-4.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/SpecialCasing-4.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17
 *
 * @unicodeVersion 3.1
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:23.485Z
 */
export interface SpecialCasing4 {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17
   */
  code: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17
   */
  lower: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17
   */
  title: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17
   */
  upper: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17
   */
  comment: string;
}

export const SPECIAL_CASING_4_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
