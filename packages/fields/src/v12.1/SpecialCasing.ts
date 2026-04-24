/**
 * Parsed row from `SpecialCasing.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/SpecialCasing.txt#L32-L37
 *
 * @unicodeVersion 12.1
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:54.455Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * Full lowercase mapping, expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/SpecialCasing.txt#L32-L37
   */
  lower: string;

  /**
   * Full titlecase mapping, expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/SpecialCasing.txt#L32-L37
   */
  title: string;

  /**
   * Full uppercase mapping, expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/SpecialCasing.txt#L32-L37
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/SpecialCasing.txt#L32
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
