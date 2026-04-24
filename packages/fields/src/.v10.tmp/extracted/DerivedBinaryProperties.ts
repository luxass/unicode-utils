/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:51:48.429Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point or range listed as having Bidi_Mirrored=Yes.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Bidi_Mirrored binary property (Yes).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  bidi_mirrored: "Y";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point", "bidi_mirrored"];
