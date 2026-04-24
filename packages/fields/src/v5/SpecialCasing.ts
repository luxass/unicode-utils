/**
 * Parsed row from `SpecialCasing.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/SpecialCasing.txt#L24-L28
 *
 * @unicodeVersion 5
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:03.500Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/SpecialCasing.txt#L24
   */
  code: string;

  /**
   * Lowercase mapping; one or more character values in hex, space-separated.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/SpecialCasing.txt#L24-L28
   */
  lower: string;

  /**
   * Titlecase mapping; one or more character values in hex, space-separated.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/SpecialCasing.txt#L24-L28
   */
  title: string;

  /**
   * Uppercase mapping; one or more character values in hex, space-separated.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/SpecialCasing.txt#L24-L28
   */
  upper: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/SpecialCasing.txt#L24
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/SpecialCasing.txt#L24
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
