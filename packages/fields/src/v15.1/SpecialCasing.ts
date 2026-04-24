/**
 * Parsed row from `SpecialCasing.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/SpecialCasing.txt#L32-L36
 *
 * @unicodeVersion 15.1
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:51.081Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * Full lowercase mapping(s), expressed as hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/SpecialCasing.txt#L32-L36
   */
  lower: string;

  /**
   * Full titlecase mapping(s), expressed as hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/SpecialCasing.txt#L32-L36
   */
  title: string;

  /**
   * Full uppercase mapping(s), expressed as hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/SpecialCasing.txt#L32-L36
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/SpecialCasing.txt#L32
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
