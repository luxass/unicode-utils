/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:44:44.365Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range of code points listed explicitly (unlisted have Decomposition_Type None).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decomposition_Type property value from UnicodeData.txt field 5 (None for unlisted code points).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type: "Canonical" | "Font" | "NoBreak" | "Initial" | "Medial" | "Final" | "Isolated" | "Circle" | "Super" | "Sub" | "Vertical" | "Wide" | "Narrow" | "Small" | "Square" | "Fraction" | "Compat";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
