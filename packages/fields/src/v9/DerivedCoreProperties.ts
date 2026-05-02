/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:49:56.502Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point or range of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Derived core property value (e.g., Math).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: string;
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point", "property_value"];
