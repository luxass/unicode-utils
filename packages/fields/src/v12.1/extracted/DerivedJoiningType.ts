/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedJoiningType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedJoiningType.txt#L17
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:31.079Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * @missing: 0000..10FFFF; Non_Joining.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedJoiningType.txt#L17
   */
  code_point: string;

  /**
   * Derived Joining_Type property value as described in ArabicShaping.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedJoiningType.txt#L12
   */
  joining_type: "Join_Causing" | (string & {});
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point", "joining_type"];
