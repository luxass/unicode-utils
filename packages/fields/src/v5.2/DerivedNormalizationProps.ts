/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/DerivedNormalizationProps.txt#L11-L15
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:44.572Z
 */
export interface DerivedNormalizationProps {
  /**
   * Code point range for which the FC_NFKC_Closure property applies.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/DerivedNormalizationProps.txt#L11-L15
   */
  code_point_range: string;

  /**
   * List of code points that are added to the FC_NFKC_Closure set for the given code point range.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/DerivedNormalizationProps.txt#L11-L15
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "fc_nfkc_closure"];
