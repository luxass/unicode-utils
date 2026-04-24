/**
 * Parsed row from `SpecialCasing.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/SpecialCasing.txt#L24-L37
 *
 * @unicodeVersion 6.3
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:32.159Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/SpecialCasing.txt#L24
   */
  code: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/SpecialCasing.txt#L24
   */
  lower: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/SpecialCasing.txt#L24
   */
  title: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/SpecialCasing.txt#L24
   */
  upper: string;

  /**
   * Optional condition list of language IDs or contexts, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/SpecialCasing.txt#L24-L37
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/SpecialCasing.txt#L24
   */
  comment: string;
}

export const SPECIAL_CASING_FIELDS = [
  "code",
  "lower",
  "title",
  "upper",
  "condition_list",
  "comment",
];
