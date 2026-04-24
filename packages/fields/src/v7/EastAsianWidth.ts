/**
 * Parsed row from `EastAsianWidth.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/EastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/EastAsianWidth.txt#L12-L17
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:12.721Z
 */
export interface EastAsianWidth {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/EastAsianWidth.txt#L13
   */
  codepoints: string;

  /**
   * East_Asian_Width property, consisting of one of the following values: "N", "A", "H", "W", "F", "Na".
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/EastAsianWidth.txt#L12-L17
   */
  east_asian_width: "N" | "A" | "H" | "W" | "F" | "Na";
}

export const EAST_ASIAN_WIDTH_FIELDS = ["codepoints", "east_asian_width"];
