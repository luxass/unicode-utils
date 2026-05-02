/**
 * Parsed row from `SpecialCasing.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24
 *
 * @unicodeVersion 5.1
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:54:16.973Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24
   */
  code: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24
   */
  lower: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24
   */
  title: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24
   */
  upper: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24
   */
  comment: string;
}

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
