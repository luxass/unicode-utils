/**
 * Parsed row from `SpecialCasing.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/SpecialCasing.txt#L32-L46
 *
 * @unicodeVersion 17
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:30.974Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  code: string;

  /**
   * Lowercase mapping, expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  lower: string;

  /**
   * Titlecase mapping, expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  title: string;

  /**
   * Uppercase mapping, expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  upper: string;

  /**
   * Optional condition list consisting of one or more language IDs or casing contexts separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/SpecialCasing.txt#L32-L46
   */
  condition_list: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/SpecialCasing.txt#L32
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
