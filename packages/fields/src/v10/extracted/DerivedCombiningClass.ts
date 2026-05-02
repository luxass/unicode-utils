/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L12
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:57.540Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Code point or range with explicit Canonical_Combining_Class value (listing UnicodeData.txt, field 3).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L12
   */
  code_point_range: string;

  /**
   * Canonical Combining Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
   */
  ccc_value: string;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point_range", "ccc_value"];
