/**
 * Parsed row from `extracted/DerivedEastAsianWidth-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedEastAsianWidth-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedEastAsianWidth-3.2.0.txt#L13-L14
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:06.054Z
 */
export interface ExtractedDerivedEastAsianWidth320 {
  /**
   * Unicode code point range (first field of EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedEastAsianWidth-3.2.0.txt#L13-L14
   */
  code_point_range: string;

  /**
   * East Asian Width property value (listing EastAsianWidth.txt, field 1).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedEastAsianWidth-3.2.0.txt#L13-L14
   */
  east_asian_width: "F" | "H" | "W" | "Na" | "A" | "N" | "Cn";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_320_FIELDS = [
  "code_point_range",
  "east_asian_width",
];
