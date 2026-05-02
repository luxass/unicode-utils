/**
 * Parsed row from `SpecialCasing-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/SpecialCasing-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18
 *
 * @unicodeVersion 3.2
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:58:50.983Z
 */
export interface SpecialCasing320 {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18
   */
  code: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18
   */
  lower: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18
   */
  title: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18
   */
  upper: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18
   */
  comment: string;
}

export const SPECIAL_CASING_320_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
