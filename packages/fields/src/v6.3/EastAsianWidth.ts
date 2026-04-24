/**
 * Parsed row from `EastAsianWidth.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/EastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/EastAsianWidth.txt#L13-L15
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:08.718Z
 */
export interface EastAsianWidth {
  /**
   * Unicode value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/EastAsianWidth.txt#L13
   */
  unicode_value: string;

  /**
   * East_Asian_Width property, consisting of one of the following values: "N", "A", "H", "W", "F", "Na".
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/EastAsianWidth.txt#L14-L15
   */
  east_asian_width: "N" | "A" | "H" | "W" | "F" | "Na";
}

export const EAST_ASIAN_WIDTH_FIELDS = ["unicode_value", "east_asian_width"];
