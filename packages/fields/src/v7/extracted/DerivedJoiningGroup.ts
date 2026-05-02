/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedJoiningGroup.txt#L11-L14
 *
 * @unicodeVersion 7
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:05.832Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Joining Group (listing ArabicShaping.txt, field 3). All code points not explicitly listed for Joining_Group have the value No_Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedJoiningGroup.txt#L11-L14
   */
  joining_group: "No_Joining_Group";
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["joining_group"];
