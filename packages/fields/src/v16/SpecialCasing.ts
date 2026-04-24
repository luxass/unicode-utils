/**
 * Parsed row from `SpecialCasing.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32-L36
 *
 * @unicodeVersion 16
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:55:24.271Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * Lowercase mapping, expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  lower: string;

  /**
   * Titlecase mapping, expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  title: string;

  /**
   * Uppercase mapping, expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;

  /**
   * Informational comment.
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
