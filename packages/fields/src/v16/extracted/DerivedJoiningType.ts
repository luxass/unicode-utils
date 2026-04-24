/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:02:51.445Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Unicode code point or range, represented as hexadecimal value(s).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Joining_Type property value (excluding Non_Joining which is default).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_type: "Join_Causing" | "Dual_Joining" | "Left_Joining" | "Right_Joining" | "Transparent";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point", "joining_type"];
