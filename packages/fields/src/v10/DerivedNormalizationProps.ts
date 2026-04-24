/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 10
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:21:50.354Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Derived normalization property name.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_name: "NFKC_CF" | "FC_NFKC_Closure";

  /**
   * Space-separated hexadecimal code points representing the property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  value: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoint_range", "property_name", "value"];
