/**
 * Parsed row from `extracted/DerivedEastAsianWidth-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedEastAsianWidth-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedEastAsianWidth-4.0.1.txt#L11-L14
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:52.400Z
 */
export interface ExtractedDerivedEastAsianWidth401 {
  /**
   * Unicode code point range or single code point (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedEastAsianWidth-4.0.1.txt#L11
   */
  code_point_range: string;

  /**
   * East Asian Width property value; unlisted code points have value Neutral (N).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedEastAsianWidth-4.0.1.txt#L11-L14
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W";
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_401_FIELDS = ["code_point_range", "east_asian_width"];
