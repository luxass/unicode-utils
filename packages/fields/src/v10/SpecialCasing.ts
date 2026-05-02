/**
 * Parsed row from `SpecialCasing.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/SpecialCasing.txt#L32-L35
 *
 * @unicodeVersion 10
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:53.993Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * Full lowercase mapping(s), expressed as character values in hex.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  lower: string;

  /**
   * Full titlecase mapping(s), expressed as character values in hex.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  title: string;

  /**
   * Full uppercase mapping(s), expressed as character values in hex.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/SpecialCasing.txt#L32-L35
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/SpecialCasing.txt#L32
   */
  comment: string;
}

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
