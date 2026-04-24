/**
 * Parsed row from `SpecialCasing.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L32
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L34
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L39
 *
 * @unicodeVersion 13
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:09.506Z
 */
export interface SpecialCasing {
  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L32
   */
  code: string;

  /**
   * <code>, <lower>, <title>, and <upper> provide the respective full case mappings.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L34
   */
  lower: string;

  /**
   * <code>, <lower>, <title>, and <upper> provide the respective full case mappings.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L34
   */
  title: string;

  /**
   * <code>, <lower>, <title>, and <upper> provide the respective full case mappings.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L34
   */
  upper: string;

  /**
   * Optional condition list consisting of one or more language IDs or casing contexts, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L39
   */
  condition_list: string;

  /**
   * <code>; <lower>; <title>; <upper>; (<condition_list>;)?
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/SpecialCasing.txt#L32
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
