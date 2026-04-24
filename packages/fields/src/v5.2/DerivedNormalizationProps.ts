/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.2
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:33:57.288Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point or range of code points to which the property applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Name of the derived normalization property, such as FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_name: string;

  /**
   * Value of the property; for FC_NFKC_Closure a sequence of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = [
  "code_point_range",
  "property_name",
  "property_value",
];
