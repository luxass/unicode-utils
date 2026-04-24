/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:01.894Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Unicode code point range or single code point with property value, per standard UCD format documented in referenced reports.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Joining_Type property value; defaults to Non_Joining (U) for unlisted code points, as described in ArabicShaping.txt.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  joining_type: "Join_Causing" | "Non_Joining" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
