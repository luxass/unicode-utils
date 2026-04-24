/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:28:23.459Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Derived Joining_Type property value as defined for Arabic shaping.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_type:
    | "Join_Causing"
    | "Dual_Joining"
    | "Left_Joining"
    | "Right_Joining"
    | "Transparent"
    | "Non_Joining";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point", "joining_type"];
