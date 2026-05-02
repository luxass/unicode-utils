/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
 * - https://ucdjs.dev/reports/tr11/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:40:32.968Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or block (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value.
   *
   * @source https://ucdjs.dev/reports/tr11/
   */
  east_asian_width: "Neutral" | "Wide" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
