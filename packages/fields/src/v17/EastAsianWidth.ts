/**
 * Parsed row from `EastAsianWidth.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/EastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/EastAsianWidth.txt#L16-L18
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:37.606Z
 */
export interface EastAsianWidth {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/EastAsianWidth.txt#L16
   */
  code_point_range: string;

  /**
   * East_Asian_Width property, consisting of one of the following values: "A", "F", "H", "N", "Na", "W".
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/EastAsianWidth.txt#L17-L18
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W";
}

export const EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
