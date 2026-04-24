/**
 * Parsed row from `SpecialCasing-4.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/SpecialCasing-4.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17-L23
 *
 * @unicodeVersion 3.1
 * @fields 5
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:37:01.962Z
 */
export interface SpecialCasing4 {
  /**
   * Unicode code point value(s) in hexadecimal format. If there is more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17-L20
   */
  code: string;

  /**
   * Lowercase mapping value(s) in hex. If there is more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17-L20
   */
  lower: string;

  /**
   * Titlecase mapping value(s) in hex. If there is more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17-L20
   */
  title: string;

  /**
   * Uppercase mapping value(s) in hex. If there is more than one character, they are separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17-L20
   */
  upper: string;

  /**
   * Optional condition list consisting of one or more locales or contexts, separated by spaces.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/SpecialCasing-4.txt#L17-L23
   */
  condition_list: string;
}

export const SPECIAL_CASING_4_FIELDS = ["code", "lower", "title", "upper", "condition_list"];
