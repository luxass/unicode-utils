/**
 * Parsed row from `SpecialCasing.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L32-L36
 *
 * @unicodeVersion 13
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:06.691Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * Full lowercase mapping(s), expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  lower: string;

  /**
   * Full titlecase mapping(s), expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  title: string;

  /**
   * Full uppercase mapping(s), expressed as one or more hexadecimal character values separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L32
   */
  comment: string;
}

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
