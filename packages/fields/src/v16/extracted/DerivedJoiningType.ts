/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L21
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:54:29.598Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * @missing: 0000..10FFFF; Non_Joining.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningType.txt#L17
   */
  code_point_range: string;

  /**
   * Derived Joining_Type value, defaulting to Non_Joining (U) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L21
   */
  joining_type: "Join_Causing" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point_range", "joining_type"];
