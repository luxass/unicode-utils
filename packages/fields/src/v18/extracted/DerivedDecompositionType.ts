/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:41:04.316Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range as first semicolon-separated field per UCD file conventions.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decomposition_Type value derived from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type: "Canonical" | "Circle" | "Compat" | "Final" | "Font" | "Fraction" | "Initial" | "Isolated" | "Medial" | "Narrow" | "NoBreak" | "None" | "Small" | "Square" | "Sub" | "Super" | "Vertical" | "Wide";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
