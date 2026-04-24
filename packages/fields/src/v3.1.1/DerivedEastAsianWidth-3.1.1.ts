/**
 * Parsed row from `DerivedEastAsianWidth-3.1.1.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/DerivedEastAsianWidth-3.1.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update1/DerivedEastAsianWidth-3.1.1.txt#L13-L14
 * - https://ucdjs.dev/reports/tr11/
 *
 * @unicodeVersion 3.1.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:56.196Z
 */
export interface DerivedEastAsianWidth311 {
  /**
   * Unicode code point range.
   *
   * @source https://ucdjs.dev/reports/tr11/
   */
  range: string;

  /**
   * East Asian Width property value from EastAsianWidth.txt field 1.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/DerivedEastAsianWidth-3.1.1.txt#L13-L14
   */
  east_asian_width: "F" | "H" | "W" | "Na" | "A" | "N" | (string & {});
}

export const DERIVED_EAST_ASIAN_WIDTH_311_FIELDS = ["range", "east_asian_width"];
