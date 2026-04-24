/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedCombiningClass.txt#L12-L21
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:22.894Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range explicitly listed for Canonical_Combining_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedCombiningClass.txt#L12-L21
   */
  code_point: string;

  /**
   * Canonical_Combining_Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/extracted/DerivedCombiningClass.txt#L12-L21
   */
  ccc: string;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point", "ccc"];
