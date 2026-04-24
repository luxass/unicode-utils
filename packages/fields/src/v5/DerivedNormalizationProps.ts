/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:54:04.463Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point or range (e.g., 0020 or 00DF..00DF).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * One of the derived normalization properties.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "NFC_QC" | "NFD_QC" | "NFKC_QC" | "NFKD_QC" | "FCC_CF" | "FC_NFKC_Closure";

  /**
   * The value for the property; for closures a space-separated list of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  value: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "property", "value"];
