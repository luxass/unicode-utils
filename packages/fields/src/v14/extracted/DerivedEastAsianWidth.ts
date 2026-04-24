/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L17
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L21
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:28.390Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L17
   */
  code_point_range: string;

  /**
   * East_Asian_Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  east_asian_width: "Neutral";

  /**
   * East_Asian_Width=Neutral.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L21
   */
  comment: string;
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = [
  "code_point_range",
  "east_asian_width",
  "comment",
];
