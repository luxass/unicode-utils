/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedEastAsianWidth.txt#L16
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:13.025Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Code point range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedEastAsianWidth.txt#L16
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value (defaults to Neutral).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
   */
  east_asian_width: "Neutral";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
