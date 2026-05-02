/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:43:05.265Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Code point range (single code point or range) in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Derived Joining_Type property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_type: "Non_Joining" | "Left_Joining" | "Right_Joining" | "Dual_Joining" | "Join_Causing" | "Transparent";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point", "joining_type"];
