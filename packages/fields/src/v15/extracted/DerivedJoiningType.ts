/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L21
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:58.491Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Code point or range explicitly listed with a Joining_Type value other than the default Non_Joining.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedJoiningType.txt#L14-L17
   */
  code_point_range: string;

  /**
   * Joining_Type property value, with default Non_Joining (U) for all unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L21
   */
  joining_type: "Join_Causing" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
