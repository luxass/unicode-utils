/**
 * Parsed row from `SpecialCasing.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/SpecialCasing.txt#L31-L35
 *
 * @unicodeVersion 7
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:27:02.096Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/SpecialCasing.txt#L31
   */
  code: string;

  /**
   * Full lowercase mapping, one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/SpecialCasing.txt#L31-L35
   */
  lower: string;

  /**
   * Full titlecase mapping, one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/SpecialCasing.txt#L31-L35
   */
  title: string;

  /**
   * Full uppercase mapping, one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/SpecialCasing.txt#L31-L35
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/SpecialCasing.txt#L31
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/SpecialCasing.txt#L31
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
