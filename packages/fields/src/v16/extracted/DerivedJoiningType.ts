/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L17
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningType.txt#L21
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:13.899Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Code point range explicitly listed with a derived Joining_Type value; unlisted code points have Non_Joining (U).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L17
   */
  code_point_range: string;

  /**
   * Value of the derived Joining_Type property.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningType.txt#L21
   */
  joining_type: "Join_Causing" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
