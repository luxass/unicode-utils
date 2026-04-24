/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedCombiningClass.txt#L11-L20
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:12.527Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range with Canonical_Combining_Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedCombiningClass.txt#L11-L20
   */
  code_point_range: string;

  /**
   * Canonical_Combining_Class values; unlisted code points have value Not_Reordered (0).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/extracted/DerivedCombiningClass.txt#L11-L20
   */
  canonical_combining_class: "Not_Reordered" | (string & {});
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = [
  "code_point_range",
  "canonical_combining_class",
];
