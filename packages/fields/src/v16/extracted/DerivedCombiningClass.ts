/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedCombiningClass.txt#L12
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:15:09.526Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Combining Class (listing UnicodeData.txt, field 3: see UAX 44: https://www.unicode.org/reports/tr44/).
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedCombiningClass.txt#L12
   */
  code_point_range: string;

  /**
   * Canonical_Combining_Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
   */
  combining_class: "Not_Reordered";
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point_range", "combining_class"];
