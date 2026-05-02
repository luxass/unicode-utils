/**
 * Parsed row from `EastAsianWidth-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/EastAsianWidth-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/EastAsianWidth-3.2.0.txt#L8-L10
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:58:05.402Z
 */
export interface EastAsianWidth320 {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/EastAsianWidth-3.2.0.txt#L8
   */
  unicode_value: string;

  /**
   * East Asian Width property, consisting of one of the following values: "N", "A", "H", "W", "F", "Na".
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/EastAsianWidth-3.2.0.txt#L9-L10
   */
  east_asian_width: "N" | "A" | "H" | "W" | "F" | "Na";
}

export const EAST_ASIAN_WIDTH_320_FIELDS = ["unicode_value", "east_asian_width"];
