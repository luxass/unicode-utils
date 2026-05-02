/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L18
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:55.784Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point or range explicitly listed for East_Asian_Width.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value, with unlisted code points defaulting to Neutral (N).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L13-L18
   */
  east_asian_width: "Neutral" | "N";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
