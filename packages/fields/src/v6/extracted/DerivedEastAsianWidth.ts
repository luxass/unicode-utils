/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L20
 * - https://ucdjs.dev/reports/tr11/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:27:52.038Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point or range explicitly listed.
   *
   * @source https://ucdjs.dev/reports/tr11/
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value (Neutral indicated by N per EastAsianWidth.txt conventions).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L20
   */
  east_asian_width: "Neutral" | "N" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
