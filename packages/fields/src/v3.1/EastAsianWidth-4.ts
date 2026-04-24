/**
 * Parsed row from `EastAsianWidth-4.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/EastAsianWidth-4.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/EastAsianWidth-4.txt#L8-L10
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:21.778Z
 */
export interface EastAsianWidth4 {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/EastAsianWidth-4.txt#L8
   */
  unicode_value: string;

  /**
   * East Asian Width property, consisting of one of the following values: "N", "A", "H", "W", "F", "Na".
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/EastAsianWidth-4.txt#L9-L10
   */
  east_asian_width: "N" | "A" | "H" | "W" | "F" | "Na";
}

export const EAST_ASIAN_WIDTH_4_FIELDS = ["unicode_value", "east_asian_width"];
