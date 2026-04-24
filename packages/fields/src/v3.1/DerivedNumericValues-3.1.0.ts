/**
 * Parsed row from `DerivedNumericValues-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedNumericValues-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedNumericValues-3.1.0.txt#L13-L14
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:22.504Z
 */
export interface DerivedNumericValues310 {
  /**
   * Numeric Values (from UnicodeData.txt, field 6/7/8) ================================================.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedNumericValues-3.1.0.txt#L13-L14
   */
  codepoint_range: string;

  /**
   * Numeric value from UnicodeData.txt fields 6/7/8.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedNumericValues-3.1.0.txt#L13-L14
   */
  numeric_value: string;
}

export const DERIVED_NUMERIC_VALUES_310_FIELDS = ["codepoint_range", "numeric_value"];
