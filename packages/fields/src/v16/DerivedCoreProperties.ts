/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T03:55:00.853Z
 */
export interface DerivedCoreProperties {
  /**
   * Hexadecimal Unicode code point or range (e.g., '0041..005A' or '0020').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Name of the derived core property (e.g., 'Math') for which the code points have value 'Yes'.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point_range", "property"];
