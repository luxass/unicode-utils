/**
 * Parsed row from `DerivedEastAsianWidth-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedEastAsianWidth-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:55:42.687Z
 */
export interface DerivedEastAsianWidth310 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * East Asian Width property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W";
}

export const DERIVED_EAST_ASIAN_WIDTH_310_FIELDS = ["code_point", "east_asian_width"];
