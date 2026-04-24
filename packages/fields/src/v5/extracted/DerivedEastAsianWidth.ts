/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
 * - https://ucdjs.dev/reports/tr11/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:31.496Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr11/
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value (listing EastAsianWidth.txt, field 1); default Neutral (N) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
   */
  east_asian_width: "Neutral" | "N" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
