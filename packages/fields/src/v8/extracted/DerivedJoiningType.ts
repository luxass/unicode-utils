/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedJoiningType.txt#L11
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedJoiningType.txt#L16
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:05.156Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * @missing: 0000..10FFFF; Non_Joining.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedJoiningType.txt#L16
   */
  code_point_range: string;

  /**
   * Joining_Type property value for the listed code points, derived as described in ArabicShaping.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedJoiningType.txt#L11
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
