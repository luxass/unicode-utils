/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedCombiningClass.txt#L17
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:24.104Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * @missing: 0000..10FFFF; Not_Reordered.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedCombiningClass.txt#L17
   */
  code_point: string;

  /**
   * Canonical_Combining_Class value; unlisted code points have value 0 (Not_Reordered).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/extracted/DerivedCombiningClass.txt#L12-L15
   */
  combining_class: number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point", "combining_class"];
