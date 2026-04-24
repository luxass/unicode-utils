/**
 * Parsed row from `DerivedNormalizationProps-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/DerivedNormalizationProps-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:54:25.284Z
 */
export interface DerivedNormalizationProps400 {
  /**
   * Source code point for the FC_NFKC_Closure mapping.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Space-separated hex code points constituting the FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: Array<string>;
}

export const DERIVED_NORMALIZATION_PROPS_400_FIELDS = ["code_point", "fc_nfkc_closure"];
