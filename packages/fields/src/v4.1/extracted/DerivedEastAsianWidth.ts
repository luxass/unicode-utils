/**
 * Parsed row from `extracted/DerivedEastAsianWidth.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/extracted/DerivedEastAsianWidth.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
 *
 * @unicodeVersion 4.1
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:52.496Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * East_Asian_Width property value; unlisted code points have value Neutral (N).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/extracted/DerivedEastAsianWidth.txt#L11-L14
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["east_asian_width"];
