/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 5.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:52:40.368Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decomposition_Type property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type: "Canonical" | "Circle" | "Compat" | "Final" | "Font" | "Initial" | "Isolated" | "Medial" | "Narrow" | "NoBreak" | "None" | "Small" | "Square" | "Sub" | "Super" | "Vertical" | "Wide";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
