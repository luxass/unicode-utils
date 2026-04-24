/**
 * Parsed row from `EastAsianWidth.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/EastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/EastAsianWidth.txt#L16-L18
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:25.145Z
 */
export interface EastAsianWidth {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/EastAsianWidth.txt#L16-L17
   */
  field_0: "A" | "F" | "H" | "N" | "Na" | "W";

  /**
   * East_Asian_Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/EastAsianWidth.txt#L17-L18
   */
  field_1: "A" | "F" | "H" | "N" | "Na" | "W";
}

export const EAST_ASIAN_WIDTH_FIELDS = ["field_0", "field_1"];
