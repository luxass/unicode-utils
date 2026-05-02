/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L14-L15
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:05.152Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value; unlisted code points default to Neutral.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L14-L15
   */
  east_asian_width: "Neutral" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
