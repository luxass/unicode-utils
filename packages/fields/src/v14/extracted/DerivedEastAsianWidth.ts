/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:37.987Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point explicitly listed for East_Asian_Width.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
   */
  east_asian_width: "Neutral" | "Fullwidth" | "Halfwidth" | "Narrow" | "Wide" | "Ambiguous";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
