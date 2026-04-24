/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L8
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:35:15.417Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * For documentation, see http://www.unicode.org/reports/tr44/.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L8
   */
  code_point: string;

  /**
   * Canonical_Combining_Class value.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/extracted/DerivedCombiningClass.txt#L21
   */
  combining_class: "Not_Reordered" | (string & {});
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["code_point", "combining_class"];
