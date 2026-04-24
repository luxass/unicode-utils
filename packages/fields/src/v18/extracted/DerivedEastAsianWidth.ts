/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L45
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:44.303Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  range: string;

  /**
   * East_Asian_Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L45
   */
  east_asian_width: "Fullwidth" | "Halfwidth" | "Ambiguous" | "Neutral" | "Narrow" | "Wide";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["range", "east_asian_width"];
