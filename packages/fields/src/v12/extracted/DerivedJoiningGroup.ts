/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedJoiningGroup.txt#L12-L15
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:35.295Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Unicode code point or range explicitly listed for Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedJoiningGroup.txt#L14
   */
  code_point_range: string;

  /**
   * Joining Group (listing ArabicShaping.txt, field 3); all code points not explicitly listed have the value No_Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedJoiningGroup.txt#L12-L15
   */
  joining_group: "No_Joining_Group";
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
