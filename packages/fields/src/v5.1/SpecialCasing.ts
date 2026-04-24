/**
 * Parsed row from `SpecialCasing.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24-L30
 *
 * @unicodeVersion 5.1
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:29:20.687Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24
   */
  code: string;

  /**
   * Lowercase mapping(s), multiple values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24-L28
   */
  lower: string;

  /**
   * Titlecase mapping(s), multiple values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24-L28
   */
  title: string;

  /**
   * Uppercase mapping(s), multiple values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24-L28
   */
  upper: string;

  /**
   * Optional condition list of language IDs or contexts, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24-L30
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/SpecialCasing.txt#L24
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
