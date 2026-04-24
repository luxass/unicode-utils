/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L17
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:26.739Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * @missing: 0000..10FFFF; Neutral.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L17
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value (listing EastAsianWidth.txt, field 1); unlisted code points have value Neutral (N).
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
   */
  east_asian_width: "A" | "F" | "H" | "Na" | "N" | "W" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
