/**
 * Parsed row from `SpecialCasing.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/SpecialCasing.txt#L24-L37
 *
 * @unicodeVersion 4.1
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:40.774Z
 */
export interface SpecialCasing {
  /**
   * Unicode code point value in hex.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/SpecialCasing.txt#L24-L28
   */
  code: string;

  /**
   * Lowercase mapping; one or more character values in hex, space separated.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/SpecialCasing.txt#L24-L28
   */
  lower: string;

  /**
   * Titlecase mapping; one or more character values in hex, space separated.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/SpecialCasing.txt#L24-L28
   */
  title: string;

  /**
   * Uppercase mapping; one or more character values in hex, space separated.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/SpecialCasing.txt#L24-L28
   */
  upper: string;

  /**
   * Optional list of locale IDs or contexts, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/SpecialCasing.txt#L24-L37
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/SpecialCasing.txt#L24
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
