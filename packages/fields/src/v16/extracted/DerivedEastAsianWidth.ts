/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L43
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:59.136Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Code point range or single code point (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  range: string;

  /**
   * East_Asian_Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L43
   */
  east_asian_width: "Neutral" | "Wide" | "Narrow" | "Ambiguous" | "Fullwidth" | "Halfwidth";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["range", "east_asian_width"];
