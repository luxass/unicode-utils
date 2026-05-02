/**
 * Parsed row from `SpecialCasing-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/SpecialCasing-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
 *
 * @unicodeVersion 4
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:03.314Z
 */
export interface SpecialCasing400 {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
   */
  code: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
   */
  lower: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
   */
  title: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
   */
  upper: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/SpecialCasing-4.0.0.txt#L19
   */
  comment: string;
}

export const SPECIAL_CASING_400_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
