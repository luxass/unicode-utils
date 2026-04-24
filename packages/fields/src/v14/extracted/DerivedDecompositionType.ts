/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:26.908Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range explicitly listed with a Decomposition_Type value.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  codepoints: string;

  /**
   * Decomposition_Type from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
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

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["codepoints", "decomposition_type"];
