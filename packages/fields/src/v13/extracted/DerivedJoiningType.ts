/**
 * Parsed row from `extracted/DerivedJoiningType.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedJoiningType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedJoiningType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedJoiningType.txt#L14-L15
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedJoiningType.txt#L17
 *
 * @unicodeVersion 13
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:17.915Z
 */
export interface ExtractedDerivedJoiningType {
  /**
   * @missing: 0000..10FFFF; Non_Joining.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedJoiningType.txt#L17
   */
  code_point: string;

  /**
   * Derived Joining_Type value for the code point(s), as described in ArabicShaping.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedJoiningType.txt#L12
   */
  joining_type: "Join_Causing" | (string & {});

  /**
   * Default Joining_Type value (U) for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/extracted/DerivedJoiningType.txt#L14-L15
   */
  default_joining_type: "Non_Joining";
}

export const EXTRACTED_DERIVED_JOINING_TYPE_FIELDS = ["code_point", "joining_type", "default_joining_type"];
