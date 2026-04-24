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
 * @generated 2026-04-23T18:49:57.812Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  code: string;

  /**
   * Full lowercase mapping, expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  lower: string;

  /**
   * Full titlecase mapping, expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  title: string;

  /**
   * Full uppercase mapping, expressed as one or more hexadecimal character values separated by spaces.
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

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
