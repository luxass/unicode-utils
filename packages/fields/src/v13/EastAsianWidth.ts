/**
 * Parsed row from `EastAsianWidth.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/EastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/EastAsianWidth.txt#L15-L18
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:44:03.486Z
 */
export interface EastAsianWidth {
  /**
   * Unicode code point value or range of code point values
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/EastAsianWidth.txt#L15-L17
   */
  codepoints: string;

  /**
   * East_Asian_Width property, consisting of one of the following values
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/EastAsianWidth.txt#L15-L18
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W";
}

export const EAST_ASIAN_WIDTH_FIELDS = ["codepoints", "east_asian_width"];
