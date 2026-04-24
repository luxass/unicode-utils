/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:35.066Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point range or singleton.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Mappings constituting the FC_NFKC_Closure list, generated from NFKC(Fold(a)) computations.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
