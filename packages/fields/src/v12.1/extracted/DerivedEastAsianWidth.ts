/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L14-L15
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:32.145Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value; unlisted code points default to Neutral (N).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L14-L15
   */
  east_asian_width: "Neutral" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
