/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
 * - https://ucdjs.dev/reports/tr11/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:40:30.203Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr11/
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value; all code points not explicitly listed have the value Neutral (N).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
   */
  east_asian_width: "Neutral" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
