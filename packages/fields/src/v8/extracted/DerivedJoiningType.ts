/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:25:09.202Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Derived Joining_Type property value as described in ArabicShaping.txt.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_type: string;
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["codepoint_range", "joining_type"];
