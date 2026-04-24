/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedDecompositionType.txt#L11-L14
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:31.794Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range explicitly listed with a Decomposition_Type value other than the default None.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedDecompositionType.txt#L11-L14
   */
  code_point: string;

  /**
   * Decomposition_Type extracted from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/extracted/DerivedDecompositionType.txt#L11
   */
  decomposition_type:
    | "Can"
    | "Com"
    | "Con"
    | "Control"
    | "Font"
    | "Fraction"
    | "Init_Quote"
    | "Isol"
    | "Med"
    | "Narrow"
    | "NB"
    | "NoBreak"
    | "SQ"
    | "Square"
    | "Sub"
    | "Super"
    | "Vert"
    | "Wide"
    | (string & {});
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
