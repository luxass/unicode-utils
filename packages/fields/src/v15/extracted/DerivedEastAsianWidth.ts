/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L17
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:49.092Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * @missing: 0000..10FFFF; Neutral.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L17
   */
  range: string;

  /**
   * East_Asian_Width property value; all code points not explicitly listed have the value Neutral (N).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
   */
  east_asian_width: "Neutral" | "Wide";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["range", "east_asian_width"];
