/**
 * Parsed row from `EastAsianWidth.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/EastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/EastAsianWidth.txt#L13-L15
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:25.192Z
 */
export interface EastAsianWidth {
  /**
   * Unicode code point value or range of code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/EastAsianWidth.txt#L13
   */
  code_point: string;

  /**
   * East_Asian_Width property, consisting of one of the following values: "N", "A", "H", "W", "F", "Na"
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/EastAsianWidth.txt#L14-L15
   */
  east_asian_width: "N" | "A" | "H" | "W" | "F" | "Na";
}

export const EAST_ASIAN_WIDTH_FIELDS = ["code_point", "east_asian_width"];
