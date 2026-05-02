/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:44.637Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point(s) or range explicitly listed with a Canonical_Combining_Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
   */
  codepoints: string;

  /**
   * Canonical_Combining_Class value for the listed code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
   */
  combining_class: "Not_Reordered";
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["codepoints", "combining_class"];
