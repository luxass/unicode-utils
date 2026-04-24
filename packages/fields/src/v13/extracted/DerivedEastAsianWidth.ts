/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L17
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L21
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:16.816Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * @missing: 0000..10FFFF; Neutral.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L17
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L21
   */
  east_asian_width: "Neutral";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
