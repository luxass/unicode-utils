/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:01.405Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point or range explicitly listed for East_Asian_Width property.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value (Neutral (N) for unlisted code points).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
   */
  east_asian_width: "Neutral" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
