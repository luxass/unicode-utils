/**
 * Parsed row from `DerivedBinaryProperties-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedBinaryProperties-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedBinaryProperties-3.1.0.txt#L13-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:36:45.253Z
 */
export interface DerivedBinaryProperties310 {
  /**
   * Unicode code point range for which the property applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * BidiMirrored property: Y if the character is mirrored in bidirectional text, derived from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedBinaryProperties-3.1.0.txt#L13-L14
   */
  bidi_mirrored: "Y" | "N";
}

export const DERIVED_BINARY_PROPERTIES_310_FIELDS = ["code_point_range", "bidi_mirrored"];
