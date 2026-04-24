/**
 * Parsed row from `EastAsianWidth.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/EastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/EastAsianWidth.txt#L12-L15
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:04.126Z
 */
export interface EastAsianWidth {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/EastAsianWidth.txt#L12-L13
   */
  codepoints: string;

  /**
   * East_Asian_Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/EastAsianWidth.txt#L14-L15
   */
  east_asian_width: "N" | "A" | "H" | "W" | "F" | "Na";
}

export const EAST_ASIAN_WIDTH_FIELDS = ["codepoints", "east_asian_width"];
