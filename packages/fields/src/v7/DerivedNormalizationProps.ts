/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 7
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:54:00.093Z
 */
export interface DerivedNormalizationProps {
  /**
   * Hexadecimal Unicode code point or range to which the line applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Name of the derived normalization property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property:
    | "Changes_When_NFKC_Casefold"
    | "Changes_When_Casefolded"
    | "Changes_When_Casemapped"
    | "Changes_When_NFKC_Casefolded"
    | "NFC_QC"
    | "NFD_QC"
    | "NFKC_QC"
    | "NFKD_QC"
    | "FC_NFKC_Closure";

  /**
   * Semicolon-separated property value(s), which may be 'Yes', 'No', 'Maybe', or space-separated code points for closures.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  values: Array<string>;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point_range", "property", "values"];
