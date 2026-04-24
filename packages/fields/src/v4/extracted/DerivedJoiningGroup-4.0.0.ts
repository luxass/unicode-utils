/**
 * Parsed row from `extracted/DerivedJoiningGroup-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedJoiningGroup-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedJoiningGroup-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:01.099Z
 */
export interface ExtractedDerivedJoiningGroup400 {
  /**
   * Code point or range with the specified Joining_Group.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedJoiningGroup-4.0.0.txt#L13-L16
   */
  code_point: string;

  /**
   * Joining Group property value; defaults to NO_JOINING_GROUP for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedJoiningGroup-4.0.0.txt#L13-L16
   */
  joining_group: string;
}

export const EXTRACTED_DERIVED_JOINING_GROUP_400_FIELDS = ["code_point", "joining_group"];
