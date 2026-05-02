/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L20
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:24.945Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11
   */
  code_point_range: string;

  /**
   * East Asian Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L20
   */
  east_asian_width: "Neutral" | "Narrow" | "Wide" | "Ambiguous" | "Halfwidth" | "Fullwidth";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
