/**
 * Parsed row from `extracted/DerivedBinaryProperties.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedBinaryProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedBinaryProperties.txt#L11
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:28.585Z
 */
export interface ExtractedDerivedBinaryProperties {
  /**
   * Unicode code point or range for the Bidi_Mirrored binary property.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  code_point: string;

  /**
   * Bidi_Mirrored property value listing UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedBinaryProperties.txt#L11
   */
  property: "Y" | "N";
}

export const EXTRACTED_DERIVED_BINARY_PROPERTIES_FIELDS = ["code_point", "property"];
