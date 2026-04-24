/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:39.023Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * East_Asian_Width (listing EastAsianWidth.txt, field 1).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  codepoint_range: string;

  /**
   * East_Asian_Width property value (listing EastAsianWidth.txt, field 1); all code points not explicitly listed have the value Neutral (N).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
   */
  east_asian_width: "Neutral" | "Wide";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["codepoint_range", "east_asian_width"];
