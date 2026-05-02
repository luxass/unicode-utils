/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedDecompositionType.txt#L11-L14
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:59.766Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range with Decomposition_Type from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedDecompositionType.txt#L11
   */
  code_point: string;

  /**
   * Decomposition type value; defaults to None for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/extracted/DerivedDecompositionType.txt#L11-L14
   */
  decomposition_type: "None" | "Canonical" | "Font" | "NoBreak" | "Initial" | "Medial" | "Final" | "Isolated" | "Circle" | "Super" | "Sub" | "Vertical" | "Wide" | "Narrow" | "Small" | "Square" | "Fraction" | "Compat" | (string & {});
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
