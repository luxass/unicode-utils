/**
 * Parsed row from `SpecialCasing-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/SpecialCasing-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19-L26
 *
 * @unicodeVersion 4.0.1
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:21.001Z
 */
export interface SpecialCasing401 {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19
   */
  code: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19
   */
  lower: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19
   */
  title: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19
   */
  upper: string;

  /**
   * Optional semicolon-separated list of locales or contexts specifying conditions under which the mappings apply.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19-L26
   */
  condition_list: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19
   */
  comment: string;
}

export const SPECIAL_CASING_401_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
