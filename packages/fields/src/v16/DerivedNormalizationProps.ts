/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:35.626Z
 */
export interface DerivedNormalizationProps {
  /**
   * Code point range for which the FC_NFKC_Closure mapping applies.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  code_point_range: string;

  /**
   * List of code points constituting the FC_NFKC_Closure mapping.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
