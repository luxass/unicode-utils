/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:20.925Z
 */
export interface DerivedNormalizationProps {
  /**
   * Code point range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * List of code points in the FC_NFKC_Closure of the code point range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
