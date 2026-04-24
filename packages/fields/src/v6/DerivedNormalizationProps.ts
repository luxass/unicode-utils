/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:52:43.015Z
 */
export interface DerivedNormalizationProps {
  /**
   * Source code point that has a non-empty FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Derived property name.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "FC_NFKC_Closure";

  /**
   * Space-separated list of code points constituting the FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point", "property", "fc_nfkc_closure"];
