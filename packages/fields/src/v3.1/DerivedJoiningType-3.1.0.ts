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
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:55:36.586Z
 */
export interface DerivedJoiningType310 {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Joining Type property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_type: "U" | "R" | "L" | "D" | "C" | "T" | "JV" | "JT";
}

export const DERIVED_JOINING_TYPE_310_FIELDS = ["code_point", "joining_type"];
