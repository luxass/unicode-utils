/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedCombiningClass.txt#L14-L15
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:30.897Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range explicitly listed for Canonical_Combining_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedCombiningClass.txt#L14-L15
   */
  codepoints: string;

  /**
   * Canonical Combining Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
   */
  ccc: "Not_Reordered";
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["codepoints", "ccc"];
