/**
 * Parsed row from `extracted/DerivedEastAsianWidth-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedEastAsianWidth-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedEastAsianWidth-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:04.584Z
 */
export interface ExtractedDerivedEastAsianWidth400 {
  /**
   * Code point range explicitly listed in EastAsianWidth.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedEastAsianWidth-4.0.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * East Asian Width property value (field 1 of EastAsianWidth.txt); unlisted code points have value N.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedEastAsianWidth-4.0.0.txt#L13-L16
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_400_FIELDS = [
  "code_point_range",
  "east_asian_width",
];
