/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:22:01.825Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point range (e.g. 0061 or 0061..0061).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * List of code points constituting the FC_NFKC_Closure set, generated from NFKC(Fold(a)) computations.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
