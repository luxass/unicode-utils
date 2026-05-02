/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedEastAsianWidth.txt#L11
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedEastAsianWidth.txt#L20
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:55.678Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedEastAsianWidth.txt#L11
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedEastAsianWidth.txt#L20
   */
  east_asian_width: "Neutral" | "N";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
