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
 * @generated 2026-04-24T03:54:10.139Z
 */
export interface ExtractedDerivedEastAsianWidth {
  /**
   * Unicode code point range or single code point (field 1 from EastAsianWidth.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L12
   */
  codepoints: string;

  /**
   * East Asian Width property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedEastAsianWidth.txt#L43
   */
  east_asian_width: "A" | "F" | "H" | "N" | "Na" | "W" | (string & {});
}

export const EXTRACTED_DERIVED_EAST_ASIAN_WIDTH_FIELDS = ["codepoints", "east_asian_width"];
