/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningGroup.txt#L14-L15
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningGroup.txt#L17
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:02.764Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Unicode code point range with default Joining_Group value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningGroup.txt#L17
   */
  code_point_range: string;

  /**
   * Default value for all code points not explicitly listed in ArabicShaping.txt field 3.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningGroup.txt#L14-L15
   */
  joining_group: "No_Joining_Group";
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point_range", "joining_group"];
