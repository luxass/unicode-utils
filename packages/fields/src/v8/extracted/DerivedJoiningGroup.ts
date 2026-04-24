/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedJoiningGroup.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedJoiningGroup.txt#L16
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:24.534Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * @missing: 0000..10FFFF; No_Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedJoiningGroup.txt#L16
   */
  code_point_range: string;

  /**
   * Joining Group property value (listing ArabicShaping.txt, field 3); all code points not explicitly listed have the value No_Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/extracted/DerivedJoiningGroup.txt#L11-L14
   */
  joining_group: "No_Joining_Group" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
