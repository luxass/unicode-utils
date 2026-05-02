/**
 * Parsed row from `extracted/DerivedEastAsianWidth-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedEastAsianWidth-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedEastAsianWidth-4.0.0.txt#L13
 * - https://ucdjs.dev/reports/tr11/
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:54:44.410Z
 */
export interface ExtractedDerivedEastAsianWidth400 {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr11/
   */
  code_point_range: string;

  /**
   * East Asian Width property value (listing EastAsianWidth.txt, field 1).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedEastAsianWidth-4.0.0.txt#L13
   */
  east_asian_width: "A" | "F" | "H" | "Na" | "N" | "W";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_400_FIELDS = ["code_point_range", "east_asian_width"];
