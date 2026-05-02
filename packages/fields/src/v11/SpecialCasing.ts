/**
 * Parsed row from `SpecialCasing.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L32
 *
 * @unicodeVersion 11
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:40.487Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L32
   */
  lower: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L32
   */
  title: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L32
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/SpecialCasing.txt#L32
   */
  comment: string;
}

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
