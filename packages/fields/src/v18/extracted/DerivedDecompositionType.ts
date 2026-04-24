/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedDecompositionType.txt#L12-L17
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:33.553Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Code point range with explicit Decomposition_Type values; unlisted code points have value None.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedDecompositionType.txt#L12-L17
   */
  code_point_range: string;

  /**
   * Decomposition_Type extracted from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  decomposition_type: "Canonical" | "Font" | "NoBreak" | "Initial" | "Medial" | "Final" | "Isolated" | "Circle" | "Super" | "Sub" | "Vertical" | "Wide" | "Narrow" | "Small" | "Square" | "Fraction" | "Compat" | (string & {});
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point_range", "decomposition_type"];
