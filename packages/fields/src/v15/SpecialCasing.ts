/**
 * Parsed row from `SpecialCasing.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/SpecialCasing.txt#L32
 *
 * @unicodeVersion 15
 * @fields 5
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:24.685Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/SpecialCasing.txt#L32
   */
  lower: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/SpecialCasing.txt#L32
   */
  title: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/SpecialCasing.txt#L32
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;
}

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list"];
