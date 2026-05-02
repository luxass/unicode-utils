/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:54:38.303Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decomposition_Type property value as defined in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type: "Canonical" | "Font" | "NoBreak" | "Initial" | "Medial" | "Final" | "Isolated" | "Circle" | "Super" | "Sub" | "Vertical" | "Wide" | "Narrow" | "Small" | "Square" | "Fraction" | "Compat";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
