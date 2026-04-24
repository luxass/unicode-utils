/**
 * Parsed row from `extracted/DerivedDecompositionType-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/extracted/DerivedDecompositionType-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.0.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:35:43.667Z
 */
export interface ExtractedDerivedDecompositionType401 {
  /**
   * Unicode code point or range with Decomposition_Type other than None.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * The Decomposition_Type property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
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
    | "Compat"
    | "Fraction";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_401_FIELDS = ["range", "decomposition_type"];
