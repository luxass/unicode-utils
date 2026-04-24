/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr15/
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:20:05.294Z
 */
export interface DerivedNormalizationProps {
  /**
   * Hexadecimal Unicode code point for the base character.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * Space-separated list of hexadecimal Unicode code points constituting the FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr15/
   */
  fc_nfkc_closure: Array<string>;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["range", "fc_nfkc_closure"];
