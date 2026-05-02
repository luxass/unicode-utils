/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:49:01.247Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range for which the Decomposition_Type is explicitly listed (default None).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decomposition_Type values other than the default None, as defined in field 5 of UnicodeData.txt.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type: "Canonical" | "Circle" | "Compat" | "Final" | "Font" | "Fraction" | "Initial" | "Isolated" | "Medial" | "Narrow" | "NoBreak" | "Small" | "Square" | "Sub" | "Super" | "Vertical" | "Wide";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
