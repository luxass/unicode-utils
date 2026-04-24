/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedEastAsianWidth.txt#L11
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedEastAsianWidth.txt#L20
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:38.196Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point explicitly listed for East_Asian_Width.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedEastAsianWidth.txt#L11
   */
  code_point_range: string;

  /**
   * East Asian Width property value from EastAsianWidth.txt listing.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/extracted/DerivedEastAsianWidth.txt#L20
   */
  east_asian_width: "Neutral" | "Narrow" | "Wide" | "Ambiguous" | "Halfwidth" | "Fullwidth";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
