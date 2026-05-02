/**
 * Parsed row from `DerivedJoiningGroup-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedJoiningGroup-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:54:39.904Z
 */
export interface DerivedJoiningGroup310 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Joining Group property value as derived from ArabicShaping.txt field 2.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_group: string;
}

export const DERIVED_JOINING_GROUP_310_FIELDS = ["code_point", "joining_group"];
