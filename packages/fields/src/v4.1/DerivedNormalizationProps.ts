/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/DerivedNormalizationProps.txt#L11-L15
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:38.262Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point or range for which the FC_NFKC_Closure property applies.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/DerivedNormalizationProps.txt#L11-L15
   */
  codepoint_range: string;

  /**
   * List of code points that are added to the FC_NFKC_Closure set for the given codepoint_range.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/DerivedNormalizationProps.txt#L11-L15
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoint_range", "fc_nfkc_closure"];
