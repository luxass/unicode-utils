/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedNormalizationProps.txt#L12
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:18.400Z
 */
export interface DerivedNormalizationProps {
  /**
   * Derived Property: FC_NFKC_Closure (DEPRECATED as of Unicode 6.0.0).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedNormalizationProps.txt#L12
   */
  codepoint_range: string;

  /**
   * Derived Property: FC_NFKC_Closure (DEPRECATED as of Unicode 6.0.0).
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/DerivedNormalizationProps.txt#L12
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoint_range", "fc_nfkc_closure"];
