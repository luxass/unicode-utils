/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedJoiningGroup.txt#L12-L17
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:48.676Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Joining Group (listing ArabicShaping.txt, field 3) All code points not explicitly listed for Joining_Group have the value No_Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedJoiningGroup.txt#L12-L17
   */
  code_point_range: string;

  /**
   * Joining Group (listing ArabicShaping.txt, field 3).
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedJoiningGroup.txt#L12
   */
  joining_group: string;
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
