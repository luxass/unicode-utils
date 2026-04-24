/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:24:39.208Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point or range (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11
   */
  codepoints: string;

  /**
   * East_Asian_Width property value; Neutral (N) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["codepoints", "east_asian_width"];
