/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedJoiningType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedJoiningType.txt#L14-L17
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:50.175Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Code point or range explicitly listed with a Joining_Type value; unlisted code points have default value Non_Joining (U).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedJoiningType.txt#L14-L17
   */
  code_point_range: string;

  /**
   * Type T derived as described in ArabicShaping.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedJoiningType.txt#L12
   */
  joining_type: "Join_Causing" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
