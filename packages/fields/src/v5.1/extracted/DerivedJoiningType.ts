/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:29:15.477Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Unicode code point or range with non-default derived Joining_Type.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the derived Joining_Type property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_type: string;
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point", "joining_type"];
