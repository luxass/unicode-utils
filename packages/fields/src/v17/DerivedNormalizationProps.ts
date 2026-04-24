/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:42.120Z
 */
export interface DerivedNormalizationProps {
  /**
   * Derived Property: FC_NFKC_Closure (DEPRECATED as of Unicode 6.0.0) Generated from computing: b = NFKC(Fold(a)); c = NFKC(Fold(b)); Then if (c != b) add the mapping from a to c t...
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  codepoint_range: string;

  /**
   * List of code points constituting the FC_NFKC_Closure for the given code point range.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/DerivedNormalizationProps.txt#L12-L16
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoint_range", "fc_nfkc_closure"];
