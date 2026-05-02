/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:44:26.922Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or singleton listed explicitly for East_Asian_Width.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12-L15
   */
  code_point_range: string;

  /**
   * East Asian Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  east_asian_width: "Neutral" | "N" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
