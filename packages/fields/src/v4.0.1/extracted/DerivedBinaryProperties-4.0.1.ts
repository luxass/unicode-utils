/**
 * Parsed row from `extracted/DerivedBinaryProperties-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedBinaryProperties-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:53:32.118Z
 */
export interface ExtractedDerivedBinaryProperties401 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Bidi_Mirrored property from UnicodeData.txt field 9 (Y for listed characters).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_mirrored: "Bidi_Mirrored";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_401_FIELDS = ["code_point", "bidi_mirrored"];
