/**
 * Parsed row from `SpecialCasing.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/SpecialCasing.txt#L24
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/SpecialCasing.txt#L26-L28
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/SpecialCasing.txt#L30-L37
 *
 * @unicodeVersion 6.1
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:29:01.800Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/SpecialCasing.txt#L24
   */
  code: string;

  /**
   * <code>, <lower>, <title>, and <upper> provide character values in hex. If there is more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/SpecialCasing.txt#L26-L28
   */
  lower: string;

  /**
   * <code>, <lower>, <title>, and <upper> provide character values in hex. If there is more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/SpecialCasing.txt#L26-L28
   */
  title: string;

  /**
   * <code>, <lower>, <title>, and <upper> provide character values in hex. If there is more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/SpecialCasing.txt#L26-L28
   */
  upper: string;

  /**
   * Optional condition list consisting of one or more language IDs or contexts, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/SpecialCasing.txt#L30-L37
   */
  condition_list: string;

  /**
   * <code>; <lower> ; <title> ; <upper> ; (<condition_list> ;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/SpecialCasing.txt#L24
   */
  comment: string;
}

export const SPECIAL_CASING_FIELDS = [
  "code",
  "lower",
  "title",
  "upper",
  "condition_list",
  "comment",
];
