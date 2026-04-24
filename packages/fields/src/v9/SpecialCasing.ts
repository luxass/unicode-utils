/**
 * Parsed row from `SpecialCasing.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32-L37
 *
 * @unicodeVersion 9
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:54.511Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * Full lowercase mapping, expressed as one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32-L37
   */
  lower: string;

  /**
   * Full titlecase mapping, expressed as one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32-L37
   */
  title: string;

  /**
   * Full uppercase mapping, expressed as one or more character values in hex separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32-L37
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/SpecialCasing.txt#L32
   */
  comment: string;
}

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
