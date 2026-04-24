/**
 * Parsed row from `extracted/DerivedBinaryProperties-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedBinaryProperties-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedBinaryProperties-4.0.1.txt#L11
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:34:53.209Z
 */
export interface ExtractedDerivedBinaryProperties401 {
  /**
   * Code point range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Bidi_Mirrored property listing from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/extracted/DerivedBinaryProperties-4.0.1.txt#L11
   */
  bidi_mirrored: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_401_FIELDS = ["code_point_range", "bidi_mirrored"];
