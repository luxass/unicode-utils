/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L44
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:51.540Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or block as listed for specific East_Asian_Width values.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  range: string;

  /**
   * East Asian Width property value per the data file format.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L44
   */
  east_asian_width: "Fullwidth" | "Halfwidth" | "Ambiguous" | "Narrow" | "Wide" | "Neutral";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["range", "east_asian_width"];
