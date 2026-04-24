/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 9
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:51:27.741Z
 */
export interface DerivedNormalizationProps {
  /**
   * Code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * The normalization-related derived property name (e.g. FC_NFKC_Closure).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;

  /**
   * Space-separated hexadecimal code points constituting the closure for closure properties.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  closure: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoint_range", "property", "closure"];
