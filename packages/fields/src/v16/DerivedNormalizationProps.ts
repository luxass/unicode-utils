/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:00:54.821Z
 */
export interface DerivedNormalizationProps {
  /**
   * Code point range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * List of code points that are the FC_NFKC_Closure of the code point range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
