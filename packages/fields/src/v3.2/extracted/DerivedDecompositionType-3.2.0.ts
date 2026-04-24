/**
 * Parsed row from `extracted/DerivedDecompositionType-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedDecompositionType-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:32:31.518Z
 */
export interface ExtractedDerivedDecompositionType320 {
  /**
   * Unicode code point or range of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decomposition Type property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type:
    | "None"
    | "Canonical"
    | "Compat"
    | "Circle"
    | "Final"
    | "Font"
    | "Fraction"
    | "Initial"
    | "Isolated"
    | "Medial"
    | "Narrow"
    | "NoBreak"
    | "Small"
    | "Square"
    | "Sub"
    | "Super"
    | "Vertical"
    | "Wide";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_320_FIELDS = ["code_point", "decomposition_type"];
