/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L21
 *
 * @unicodeVersion 12
 * @fields 1
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:24.298Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * Joining_Type property value for code points explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedJoiningType.txt#L12-L21
   */
  joining_type: "Join_Causing" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["joining_type"];
