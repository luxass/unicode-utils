/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T03:54:51.014Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Derived normalization property name.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property:
    | "FC_NFKC_Closure"
    | "NFKC_Casefold"
    | "Changes_When_NFKC_Casefold"
    | "Changes_When_Casefolded";

  /**
   * Space-separated list of code points or ranges relevant to the property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  value: Array<string>;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point", "property", "value"];
