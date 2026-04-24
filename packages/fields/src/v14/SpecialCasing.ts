/**
 * Parsed row from `SpecialCasing.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/SpecialCasing.txt#L32-L52
 *
 * @unicodeVersion 14
 * @fields 5
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:36.943Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/SpecialCasing.txt#L32
   */
  lower: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/SpecialCasing.txt#L32
   */
  title: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/SpecialCasing.txt#L32
   */
  upper: string;

  /**
   * Optional condition list of language IDs or casing contexts, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/SpecialCasing.txt#L32-L52
   */
  condition_list: string;
}

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list"];
