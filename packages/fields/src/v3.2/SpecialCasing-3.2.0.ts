/**
 * Parsed row from `SpecialCasing-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/SpecialCasing-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18-L20
 *
 * @unicodeVersion 3.2
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:36.528Z
 */
export interface SpecialCasing320 {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18-L20
   */
  code: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18-L20
   */
  lower: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18-L20
   */
  title: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18-L20
   */
  upper: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18
   */
  condition_list: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/SpecialCasing-3.2.0.txt#L18
   */
  comment: string;
}

export const SPECIAL_CASING_320_FIELDS = [
  "code",
  "lower",
  "title",
  "upper",
  "condition_list",
  "comment",
];
