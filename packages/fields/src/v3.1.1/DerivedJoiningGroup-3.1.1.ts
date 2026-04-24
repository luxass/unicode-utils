/**
 * Parsed row from `DerivedJoiningGroup-3.1.1.txt` (Unicode 3.1.1).
 *
 * @see https://unicode.org/Public/3.1-Update1/DerivedJoiningGroup-3.1.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:56:28.141Z
 */
export interface DerivedJoiningGroup311 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Joining Group property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_group: string;
}

export const DERIVED_JOINING_GROUP_311_FIELDS = ["code_point", "joining_group"];
