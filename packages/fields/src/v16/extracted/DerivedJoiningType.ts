/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L16
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningType.txt#L21
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:41:03.267Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Type T is derived, as described in ArabicShaping.txt All code points not explicitly listed for Joining_Type have the value Non_Joining (U).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L16
   */
  code_point_range: string;

  /**
   * =Join_Causing.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningType.txt#L21
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
