/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.3
 * @fields 3
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:32:01.297Z
 */
export interface DerivedNormalizationProps {
  /**
   * Unicode code point or range in hexadecimal.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Name of the derived property (e.g. FC_NFKC_Closure).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;

  /**
   * Property value: space-separated list of hexadecimal code points for closure properties.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  value: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_point", "property", "value"];
