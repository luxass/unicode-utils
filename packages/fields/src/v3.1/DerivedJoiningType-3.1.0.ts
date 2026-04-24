/**
 * Parsed row from `DerivedJoiningType-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedJoiningType-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.50
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:37:33.937Z
 */
export interface DerivedJoiningType310 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Joining Type property value per ArabicShaping.txt field 1.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_type: string;
}

export const DERIVED_JOINING_TYPE_310_FIELDS = ["code_point", "joining_type"];
