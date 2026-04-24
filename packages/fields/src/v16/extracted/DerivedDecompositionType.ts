/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedDecompositionType.txt#L17
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:44.987Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Decomposition_Type (from UnicodeData.txt, field 5: see UAX 44: https://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  codepoints: string;

  /**
   * Decomposition_Type from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedDecompositionType.txt#L12
   */
  decomposition_type:
    | "None"
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

  /**
   * @missing: 0000..10FFFF; None.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedDecompositionType.txt#L17
   */
  comment: string;
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = [
  "codepoints",
  "decomposition_type",
  "comment",
];
