/**
 * Parsed row from `SpecialCasing.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/SpecialCasing.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24-L40
 *
 * @unicodeVersion 5.2
 * @fields 6
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:33:30.148Z
 */
export interface SpecialCasing {
  /**
   * Unicode code point(s) in hex. If more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24-L28
   */
  code: string;

  /**
   * Lowercase mapping character values in hex. If more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24-L28
   */
  lower: string;

  /**
   * Titlecase mapping character values in hex. If more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24-L28
   */
  title: string;

  /**
   * Uppercase mapping character values in hex. If more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24-L28
   */
  upper: string;

  /**
   * Optional list of one or more language IDs or contexts, separated by spaces. Overrides normal behavior if all conditions are true.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24-L40
   */
  condition_list: string;

  /**
   * Informational comment.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/SpecialCasing.txt#L24
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
