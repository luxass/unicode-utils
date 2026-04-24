/**
 * Parsed row from `SpecialCasing-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/SpecialCasing-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19-L30
 *
 * @unicodeVersion 4.0.1
 * @fields 5
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:35:56.696Z
 */
export interface SpecialCasing401 {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19-L22
   */
  code: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19-L22
   */
  lower: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19-L22
   */
  title: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19-L22
   */
  upper: string;

  /**
   * Optional list of one or more locales or contexts, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/SpecialCasing-4.0.1.txt#L19-L30
   */
  condition_list: string;
}

export const SPECIAL_CASING_401_FIELDS = ["code", "lower", "title", "upper", "condition_list"];
