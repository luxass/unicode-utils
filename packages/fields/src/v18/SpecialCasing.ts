/**
 * Parsed row from `SpecialCasing.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SpecialCasing.txt#L32-L36
 *
 * @unicodeVersion 18
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:17.868Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SpecialCasing.txt#L32-L34
   */
  code: string;

  /**
   * Full lowercase mapping expressed as one or more character values in hex, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  lower: string;

  /**
   * Full titlecase mapping expressed as one or more character values in hex, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  title: string;

  /**
   * Full uppercase mapping expressed as one or more character values in hex, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/SpecialCasing.txt#L32
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
