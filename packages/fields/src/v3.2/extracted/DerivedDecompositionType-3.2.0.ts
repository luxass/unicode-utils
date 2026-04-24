/**
 * Parsed row from `extracted/DerivedDecompositionType-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedDecompositionType-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedDecompositionType-3.2.0.txt#L13-L14
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:29.001Z
 */
export interface ExtractedDerivedDecompositionType320 {
  /**
   * Decomposition Type (from UnicodeData.txt, field 5: see UnicodeData.html) ================================================.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedDecompositionType-3.2.0.txt#L13-L14
   */
  codepoint_range: string;

  /**
   * Decomposition Type from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/extracted/DerivedDecompositionType-3.2.0.txt#L13-L14
   */
  decomposition_type: "None" | "Canonical" | "Font" | "NoBreak" | "Initial" | "Medial" | "Final" | "Isolated" | "Circle" | "Super" | "Sub" | "Vertical" | "Wide" | "Narrow" | "Small" | "Square" | "Fraction" | "Compat" | (string & {});
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_320_FIELDS = ["codepoint_range", "decomposition_type"];
