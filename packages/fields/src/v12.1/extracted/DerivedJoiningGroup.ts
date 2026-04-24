/**
 * Parsed row from `extracted/DerivedJoiningGroup.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/extracted/DerivedJoiningGroup.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:52:00.292Z
 */
export interface ExtractedDerivedJoiningGroup {
  /**
   * Unicode code point or range as listed in the file.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Joining Group value (defaults to No_Joining_Group for unlisted code points).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_group: string;
}

export const EXTRACTED_DERIVED_JOINING_GROUP_FIELDS = ["code_point", "joining_group"];
