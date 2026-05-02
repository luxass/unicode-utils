/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:44:42.408Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Hexadecimal Unicode code point range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Abbreviated value of the East_Asian_Width property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W" | "Wi";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["codepoint_range", "east_asian_width"];
