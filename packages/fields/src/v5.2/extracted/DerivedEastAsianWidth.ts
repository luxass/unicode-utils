/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr11/
 *
 * @unicodeVersion 5.2
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:55.076Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * East_Asian_Width property value.
   *
   * @source https://ucdjs.dev/reports/tr11/
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W";

  /**
   * Optional comment.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = [
  "codepoint_range",
  "east_asian_width",
  "comment",
];
