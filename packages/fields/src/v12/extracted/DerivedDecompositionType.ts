/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedDecompositionType.txt#L14-L15
 *
 * @unicodeVersion 12
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:24.760Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range with explicit Decomposition_Type listing.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  code_point_range: string;

  /**
   * Decomposition_Type extracted from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  decomposition_type:
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

  /**
   * Default Decomposition_Type value for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedDecompositionType.txt#L14-L15
   */
  default_value: "None";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = [
  "code_point_range",
  "decomposition_type",
  "default_value",
];
