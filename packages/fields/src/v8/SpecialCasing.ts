/**
 * Parsed row from `SpecialCasing.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31-L33
 *
 * @unicodeVersion 8
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:47.939Z
 */
export interface SpecialCasing {
  /**
   * Unicode code point in hex providing the respective full case mappings.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31-L33
   */
  code: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31-L33
   */
  lower: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31-L33
   */
  title: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31-L33
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31
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
