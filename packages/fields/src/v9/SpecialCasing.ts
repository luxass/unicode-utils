/**
 * Parsed row from `SpecialCasing.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32-L35
 *
 * @unicodeVersion 9
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:23:28.349Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * Full lowercase mapping, one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  lower: string;

  /**
   * Full titlecase mapping, one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  title: string;

  /**
   * Full uppercase mapping, one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32
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
