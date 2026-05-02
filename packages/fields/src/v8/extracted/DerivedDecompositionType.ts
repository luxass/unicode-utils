/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:52:26.317Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range in hexadecimal.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decomposition_Type value (non-None).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type: "Canonical" | "Compat" | "Circle" | "Final" | "Font" | "Fraction" | "Initial" | "Isolated" | "Medial" | "Narrow" | "NoBreak" | "Small" | "Square" | "Sub" | "Super" | "Vertical" | "Wide";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
