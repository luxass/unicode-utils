/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedEastAsianWidth.txt#L11
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:15.302Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * East_Asian_Width (listing EastAsianWidth.txt, field 1).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedEastAsianWidth.txt#L11
   */
  code_point_range: string;

  /**
   * East Asian Width property value (listing EastAsianWidth.txt, field 1).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedEastAsianWidth.txt#L11
   */
  east_asian_width: "Fullwidth" | "Halfwidth" | "Ambiguous" | "Neutral" | "Narrow" | "Wide";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
