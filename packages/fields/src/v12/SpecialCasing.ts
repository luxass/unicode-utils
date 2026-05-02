/**
 * Parsed row from `SpecialCasing.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/SpecialCasing.txt#L32-L36
 *
 * @unicodeVersion 12
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:51.159Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * Full lowercase mapping of the code, expressed as character values in hex. If more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  lower: string;

  /**
   * Full titlecase mapping of the code, expressed as character values in hex. If more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  title: string;

  /**
   * Full uppercase mapping of the code, expressed as character values in hex. If more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/SpecialCasing.txt#L32-L36
   */
  upper: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/SpecialCasing.txt#L32
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/SpecialCasing.txt#L32
   */
  comment: string;
}

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
