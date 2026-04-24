/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T03:54:28.290Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Hexadecimal Unicode code point or range (e.g. 0021 or 00A0..00FF) sharing the same Decomposition_Type value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Value of the Decomposition_Type property as defined in UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/reports/tr44/
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
    | "Fractional"
    | "Compat";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = [
  "code_point_range",
  "decomposition_type",
];
