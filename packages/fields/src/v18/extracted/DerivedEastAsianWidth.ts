/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L45
 * - https://ucdjs.dev/reports/tr11/
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:39.102Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr11/
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value.
   *
   * @source https://ucdjs.dev/reports/tr11/
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W";

  /**
   * East_Asian_Width (listing EastAsianWidth.txt, field 1) All code points not explicitly listed for East_Asian_Width have the value Neutral (N).
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L45
   */
  name: string;
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width", "name"];
