/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:01:22.043Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Hexadecimal code point or range for characters with Decomposition_Type other than None.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code: string;

  /**
   * Decomposition_Type property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type:
    | "Canonical"
    | "Circle"
    | "Compat"
    | "Final"
    | "Font"
    | "Fraction"
    | "Narrow"
    | "NoBreak"
    | "Small"
    | "Square"
    | "Vertical"
    | "Wide";
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code", "decomposition_type"];
