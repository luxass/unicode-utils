/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:53:18.668Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point or range as per UAX #44 property files.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Bidi_Mirrored property value (Y or N).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_mirrored: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point", "bidi_mirrored"];
