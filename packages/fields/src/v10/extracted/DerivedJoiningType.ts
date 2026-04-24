/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L15
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningType.txt#L17
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:35:17.956Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * @missing: 0000..10FFFF; Non_Joining.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningType.txt#L17
   */
  code_point_range: string;

  /**
   * Joining_Type property value for the listed code points (derived property as described in ArabicShaping.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L15
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
