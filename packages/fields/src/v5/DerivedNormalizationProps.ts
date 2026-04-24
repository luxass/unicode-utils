/**
 * Parsed row from `DerivedNormalizationProps.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/DerivedNormalizationProps.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:30:26.054Z
 */
export interface DerivedNormalizationProps {
  /**
   * A single code point or range of code points in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_points: string;

  /**
   * Name of the derived normalization property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;

  /**
   * Space-separated list of Unicode code points constituting the property value (closure).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  value: Array<string>;
}

export const DERIVED_NORMALIZATION_PROPS_FIELDS = ["code_points", "property", "value"];
