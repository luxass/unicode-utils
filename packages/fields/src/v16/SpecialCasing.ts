/**
 * Parsed row from `SpecialCasing.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32-L35
 *
 * @unicodeVersion 16
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:09.184Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * Lowercase mapping, one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  lower: string;

  /**
   * Titlecase mapping, one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  title: string;

  /**
   * Uppercase mapping, one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32
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
