/**
 * Parsed row from `EastAsianWidth.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/EastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/EastAsianWidth.txt#L12-L17
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:58.727Z
 */
export interface EastAsianWidth {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/EastAsianWidth.txt#L13
   */
  code_point_range: string;

  /**
   * East_Asian_Width property, consisting of one of the following values: "N", "A", "H", "W", "F", "Na".
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/EastAsianWidth.txt#L12-L17
   */
  east_asian_width: "N" | "A" | "H" | "W" | "F" | "Na";
}

export const EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
