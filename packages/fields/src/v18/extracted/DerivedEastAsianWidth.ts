/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:40:09.273Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or block name listed for East_Asian_Width property.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  code_point_range: string;

  /**
   * East Asian Width property value, with default Neutral (N) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
   */
  east_asian_width: "Neutral" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
