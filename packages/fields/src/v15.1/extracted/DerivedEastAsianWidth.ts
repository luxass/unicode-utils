/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:40:24.624Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or block name (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  code_point_range: string;

  /**
   * East Asian Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
   */
  east_asian_width: "Neutral" | "Wide";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
