/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedDecompositionType.txt#L11
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedDecompositionType.txt#L13-L14
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:45.156Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Code point range explicitly listed with a Decomposition_Type value (unlisted code points have value None).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedDecompositionType.txt#L13-L14
   */
  code_point_range: string;

  /**
   * Decomposition_Type extracted from field 5 of UnicodeData.txt.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedDecompositionType.txt#L11
   */
  decomposition_type:
    | "None"
    | "Canonical"
    | "Font"
    | "NoBreak"
    | "Initial"
    | "Medial"
    | "Final"
    | "Isolated"
    | "Circle"
    | "Super"
    | "Sub"
    | "Vertical"
    | "Wide"
    | "Narrow"
    | "Small"
    | "Square"
    | "Fraction"
    | "Compat"
    | (string & {});
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = [
  "code_point_range",
  "decomposition_type",
];
