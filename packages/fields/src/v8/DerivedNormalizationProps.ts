/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:51:48.280Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived normalization property name.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_name: "NFC_QC" | "NFD_QC" | "NFKC_QC" | "NFKD_QC" | "NFKC_CF" | "FC_NFKC_Closure";

  /**
   * Property value such as 'Yes', 'Maybe', or space-separated code points for closures.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "property_name", "property_value"];
