/**
 * Parsed row from `extracted/DerivedEastAsianWidth-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedEastAsianWidth-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedEastAsianWidth-4.0.1.txt#L11-L18
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:34:57.462Z
 */
export interface ExtractedDerivedEastAsianWidth401 {
  /**
   * Code point range (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedEastAsianWidth-4.0.1.txt#L11
   */
  range: string;

  /**
   * East Asian Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedEastAsianWidth-4.0.1.txt#L11-L18
   */
  east_asian_width: "A" | "H" | "F" | "Na" | "N" | "W" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_401_FIELDS = ["range", "east_asian_width"];
