/**
 * Parsed row from `EastAsianWidth.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/EastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/EastAsianWidth.txt#L15-L18
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:18.065Z
 */
export interface EastAsianWidth {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/EastAsianWidth.txt#L16
   */
  codepoints: string;

  /**
   * East_Asian_Width property, consisting of one of the following values: "A", "F", "H", "N", "Na", "W".
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/EastAsianWidth.txt#L15-L18
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W";
}

export const EAST_ASIAN_WIDTH_FIELDS = ["codepoints", "east_asian_width"];
