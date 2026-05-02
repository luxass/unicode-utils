/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:38.339Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point listed explicitly for East_Asian_Width.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
   */
  code_point_range: string;

  /**
   * East Asian Width property value; Neutral (N) for all unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L13-L14
   */
  east_asian_width: "Neutral" | "N" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
