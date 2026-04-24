/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 10
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:52:10.677Z
 */
export interface DerivedNormalizationProps {
  /**
   * Hexadecimal Unicode code point of the source character.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  source_code_point: string;

  /**
   * Fixed property name for the closure mapping.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: "FC_NFKC_Closure";

  /**
   * Space-separated list of hexadecimal code points in the closure set.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  closure_code_points: Array<string>;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["source_code_point", "property", "closure_code_points"];
