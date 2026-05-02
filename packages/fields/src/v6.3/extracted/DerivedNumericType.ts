/**
 * Parsed row from `extracted/DerivedNumericType.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/extracted/DerivedNumericType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:51.592Z
 */
export interface ExtractedDerivedNumericType {
  /**
   * Unicode code point or range, as per standard UCD flat file format documented in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Numeric_Type property: Decimal when field 6 of UnicodeData.txt is present; Digit when field 7 present but not 6; Numeric when certain Unihan fields or field 8 present but not 7; None otherwise.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  numeric_type: "Decimal" | "Digit" | "Numeric" | "None";
}

export const EXTRACTED_DERIVED_NUMERIC_TYPE_FIELDS = ["code_point", "numeric_type"];
