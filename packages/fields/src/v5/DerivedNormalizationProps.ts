/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:57:38.015Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point or range for FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Semicolon-separated list of NFKC case folding closure strings, each a space-separated list of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  fc_nfkc_closure: string[];
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point", "fc_nfkc_closure"];
