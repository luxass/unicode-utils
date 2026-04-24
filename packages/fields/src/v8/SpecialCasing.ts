/**
 * Parsed row from `SpecialCasing.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31-L36
 *
 * @unicodeVersion 8
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:49.558Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31
   */
  code: string;

  /**
   * Full lowercase mapping, expressed as one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31-L36
   */
  lower: string;

  /**
   * Full titlecase mapping, expressed as one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31-L36
   */
  title: string;

  /**
   * Full uppercase mapping, expressed as one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31-L36
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/SpecialCasing.txt#L31
   */
  comment: string;
}

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
