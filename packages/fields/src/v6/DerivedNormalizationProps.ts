/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:27:39.876Z
 */
export interface DerivedNormalizationProps {
  /**
   * Code point range in the standard UCD format (e.g. '0020' or '0020..002F').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Space-separated list of code points constituting the FC_NFKC_Closure of the code point(s), or empty list if none.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
