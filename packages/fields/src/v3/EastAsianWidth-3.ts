/**
 * Parsed row from `EastAsianWidth-3.txt` (Unicode 3).
 *
 * @see https://unicode.org/Public/3.0-Update/EastAsianWidth-3.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update/EastAsianWidth-3.txt#L8-L11
 * - https://ucdjs.dev/file-explorer/v/3.0-Update/EastAsianWidth-3.txt#L17
 *
 * @unicodeVersion 3
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T05:10:18.544Z
 */
export interface EastAsianWidth3 {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/EastAsianWidth-3.txt#L8
   */
  unicode_value: string;

  /**
   * East Asian Width property, consisting of one of the following values: "N", "A", "H", "W", "F", "Na".
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/EastAsianWidth-3.txt#L9-L11
   */
  east_asian_width: "N" | "A" | "H" | "W" | "F" | "Na";

  /**
   * Unicode name (this is purely informative).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/EastAsianWidth-3.txt#L17
   */
  unicode_name: string;
}

export const EAST_ASIAN_WIDTH_3_FIELDS = ["unicode_value", "east_asian_width", "unicode_name"];
