/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedCombiningClass.txt#L12
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedCombiningClass.txt#L21
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:26.533Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code point or range with explicit Canonical_Combining_Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedCombiningClass.txt#L12
   */
  code_point_range: string;

  /**
   * Canonical_Combining_Class property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/extracted/DerivedCombiningClass.txt#L21
   */
  combining_class: string;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point_range", "combining_class"];
