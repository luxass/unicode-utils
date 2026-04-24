/**
 * Parsed row from `DerivedCoreProperties-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/DerivedCoreProperties-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:31:52.645Z
 */
export interface DerivedCoreProperties320 {
  /**
   * Hexadecimal Unicode code point or range (e.g. '0030' or '0030..0039'), without U+ prefix.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Name of the derived core property (e.g. 'Math').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;

  /**
   * Property value, which is always 'Y' for characters listed in this file.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: "Y";
}

export const DERIVED_CORE_PROPERTIES_320_FIELDS = [
  "code_point_range",
  "property",
  "property_value",
];
