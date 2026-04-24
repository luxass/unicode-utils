/**
 * Parsed row from `DerivedNumericType-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedNumericType-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedNumericType-3.1.0.txt#L13-L14
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:16.407Z
 */
export interface DerivedNumericType310 {
  /**
   * Numeric Type (from UnicodeData.txt, field 6/7/8: see UnicodeData.html) ================================================.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedNumericType-3.1.0.txt#L13-L14
   */
  code_point: string;

  /**
   * Numeric Type derived from UnicodeData.txt fields 6/7/8.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/DerivedNumericType-3.1.0.txt#L13-L14
   */
  numeric_type: "None" | "Decimal" | "Digit" | "Numeric" | (string & {});
}

export const DERIVED_NUMERIC_TYPE_310_FIELDS = ["code_point", "numeric_type"];
