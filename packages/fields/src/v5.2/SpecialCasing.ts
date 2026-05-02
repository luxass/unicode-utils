/**
 * Parsed row from `SpecialCasing.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24-L37
 *
 * @unicodeVersion 5.2
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:08.419Z
 */
export interface SpecialCasing {
  /**
   * <code>, <lower>, <title>, and <upper> provide character values in hex.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24
   */
  code: string;

  /**
   * <code>, <lower>, <title>, and <upper> provide character values in hex.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24
   */
  lower: string;

  /**
   * <code>, <lower>, <title>, and <upper> provide character values in hex.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24
   */
  title: string;

  /**
   * <code>, <lower>, <title>, and <upper> provide character values in hex.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24
   */
  upper: string;

  /**
   * The <condition_list> is optional. Where present, it consists of one or more language IDs or contexts, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24-L37
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24
   */
  comment: string;
}

export const SPECIAL_CASING_FIELDS = ["code", "lower", "title", "upper", "condition_list", "comment"];
