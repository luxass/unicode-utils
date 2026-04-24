/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/DerivedNormalizationProps.txt#L11-L15
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:24.127Z
 */
export interface DerivedNormalizationProps {
  /**
   * Code point range for the FC_NFKC_Closure mapping.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/DerivedNormalizationProps.txt#L11-L15
   */
  codepoint_range: string;

  /**
   * The FC_NFKC_Closure value computed as NFKC(Fold(NFKC(Fold(a)))) where a is the codepoint_range.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/DerivedNormalizationProps.txt#L11-L15
   */
  fc_nfkc_closure: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoint_range", "fc_nfkc_closure"];
