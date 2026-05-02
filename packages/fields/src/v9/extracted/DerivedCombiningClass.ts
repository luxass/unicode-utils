/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedCombiningClass.txt#L14-L15
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:11.911Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range explicitly listed for Canonical_Combining_Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedCombiningClass.txt#L14-L15
   */
  code_point_range: string;

  /**
   * Canonical Combining Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
   */
  ccc_value: "Not_Reordered";
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point_range", "ccc_value"];
