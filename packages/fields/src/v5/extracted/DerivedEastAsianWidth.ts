/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
 *
 * @unicodeVersion 5
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:56:23.577Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * East_Asian_Width (listing EastAsianWidth.txt, field 1). All code points not explicitly listed have the value Neutral (N).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
   */
  east_asian_width: "Neutral" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["east_asian_width"];
