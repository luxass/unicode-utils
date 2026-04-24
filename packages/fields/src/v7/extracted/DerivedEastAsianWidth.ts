/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:27:07.587Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Code point or range of code points to which the property value applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Value of the East_Asian_Width property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  east_asian_width: string;
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["code_point_range", "east_asian_width"];
