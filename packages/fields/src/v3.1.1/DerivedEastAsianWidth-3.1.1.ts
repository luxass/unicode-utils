/**
 * Parsed row from `DerivedEastAsianWidth-3.1.1.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/DerivedEastAsianWidth-3.1.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update1/DerivedEastAsianWidth-3.1.1.txt#L13
 * - https://ucdjs.dev/reports/tr11/
 *
 * @unicodeVersion 3.1.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:50.052Z
 */
export interface DerivedEastAsianWidth311 {
  /**
   * Unicode code point range.
   *
   * @source https://ucdjs.dev/reports/tr11/
   */
  codepoint_range: string;

  /**
   * East Asian Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update1/DerivedEastAsianWidth-3.1.1.txt#L13
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W";
}

export const DERIVED_EAST_ASIAN_WIDTH_311_FIELDS = ["codepoint_range", "east_asian_width"];
