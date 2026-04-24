/**
 * Parsed row from `DerivedBinaryProperties-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedBinaryProperties-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedBinaryProperties-3.1.0.txt#L13
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:14.875Z
 */
export interface DerivedBinaryProperties310 {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * BidiMirrored property value from UnicodeData.txt field 9.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedBinaryProperties-3.1.0.txt#L13
   */
  property_value: "Y" | "N";
}

export const DERIVED_BINARY_PROPERTIES_310_FIELDS = ["codepoint_range", "property_value"];
