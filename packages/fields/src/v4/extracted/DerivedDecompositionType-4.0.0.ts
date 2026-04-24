/**
 * Parsed row from `extracted/DerivedDecompositionType-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedDecompositionType-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedDecompositionType-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:05.252Z
 */
export interface ExtractedDerivedDecompositionType400 {
  /**
   * Code points with non-default Decomposition Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedDecompositionType-4.0.0.txt#L13-L16
   */
  codepoint_range: string;

  /**
   * Decomposition Type (from UnicodeData.txt, field 5).
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedDecompositionType-4.0.0.txt#L13
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
    | "Fraction"
    | "Compat"
    | (string & {});
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_400_FIELDS = [
  "codepoint_range",
  "decomposition_type",
];
