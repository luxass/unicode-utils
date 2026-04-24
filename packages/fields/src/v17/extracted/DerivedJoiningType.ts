/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedJoiningType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedJoiningType.txt#L17
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:01.515Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * @missing: 0000..10FFFF; Non_Joining.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedJoiningType.txt#L17
   */
  code_point_range: string;

  /**
   * Joining_Type value for explicitly listed code points (derived property as described in ArabicShaping.txt).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedJoiningType.txt#L12
   */
  joining_type: "Join_Causing";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
