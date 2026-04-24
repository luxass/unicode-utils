/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/DerivedNormalizationProps.txt#L11-L15
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:54.460Z
 */
export interface DerivedNormalizationProps {
  /**
   * Code point range for the FC_NFKC_Closure mapping.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/DerivedNormalizationProps.txt#L11-L15
   */
  code_point_range: string;

  /**
   * Set of code points constituting the FC_NFKC_Closure list, generated from NFKC(Fold(a)) computations.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/DerivedNormalizationProps.txt#L11-L15
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
