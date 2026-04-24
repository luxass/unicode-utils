/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:50:28.153Z
 */
export interface DerivedNormalizationProps {
  /**
   * Source code point or range of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Name of the property such as FC_NFKC_Closure.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;

  /**
   * The mapping value: sequence of one or more Unicode code points separated by spaces.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  mapping: string;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["codepoint_range", "property", "mapping"];
