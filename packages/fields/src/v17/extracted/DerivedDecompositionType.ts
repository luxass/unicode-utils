/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedDecompositionType.txt#L12-L17
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:45.192Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Decomposition_Type (from UnicodeData.txt, field 5: see UAX 44: https://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  code_point: string;

  /**
   * Decomposition_Type values explicitly listed; unlisted code points have value None (from UnicodeData.txt, field 5).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedDecompositionType.txt#L12-L17
   */
  decomposition_type: "None" | "Canonical" | "Font" | "NoBreak" | "Initial" | "Medial" | "Final" | "Isolated" | "Circle" | "Super" | "Sub" | "Vertical" | "Wide" | "Narrow" | "Small" | "Square" | "Fraction" | "Compat" | (string & {});
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
