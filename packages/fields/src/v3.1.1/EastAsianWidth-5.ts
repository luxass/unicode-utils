/**
 * Parsed row from `EastAsianWidth-5.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/EastAsianWidth-5.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update1/EastAsianWidth-5.txt#L8-L10
 *
 * @unicodeVersion 3.1.1
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:54.299Z
 */
export interface EastAsianWidth5 {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/EastAsianWidth-5.txt#L8
   */
  unicode_value: string;

  /**
   * East Asian Width property, consisting of one of the following values: "N", "A", "H", "W", "F", "Na".
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/EastAsianWidth-5.txt#L9-L10
   */
  east_asian_width: "N" | "A" | "H" | "W" | "F" | "Na";
}

export const EAST_ASIAN_WIDTH_5_FIELDS = ["unicode_value", "east_asian_width"];
