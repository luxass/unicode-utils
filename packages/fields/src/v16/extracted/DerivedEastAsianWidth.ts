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
 * @generated 2026-04-24T04:01:05.589Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * East_Asian_Width=Neutral.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L43
   */
  range: string;

  /**
   * East Asian Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  east_asian_width: "Neutral" | "Narrow" | "Wide" | "Ambiguous" | "Halfwidth" | "Fullwidth" | "A";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["range", "east_asian_width"];
