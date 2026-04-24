/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:32.017Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range with Canonical_Combining_Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedCombiningClass.txt#L12
   */
  code_point_range: string;

  /**
   * Canonical_Combining_Class values; all code points not listed have value Not_Reordered (0).
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
   */
  canonical_combining_class: "Not_Reordered" | number | (string & {});
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = [
  "code_point_range",
  "canonical_combining_class",
];
