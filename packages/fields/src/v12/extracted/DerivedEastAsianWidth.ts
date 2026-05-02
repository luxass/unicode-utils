/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:16.164Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point or range explicitly listed for East_Asian_Width.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value; unlisted code points default to Neutral (N).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
   */
  east_asian_width: "Neutral" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
