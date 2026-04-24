/**
 * Parsed row from `extracted/DerivedCombiningClass.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedCombiningClass.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedCombiningClass.txt#L14
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:19:06.512Z
 */
export interface ExtractedDerivedCombiningClass {
  /**
   * Unicode code points or ranges listed with non-default Canonical_Combining_Class values.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedCombiningClass.txt#L14
   */
  codepoints: string;

  /**
   * Canonical Combining Class value other than the default Not_Reordered (0).
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedCombiningClass.txt#L14
   */
  combining_class: number | (string & {});
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_FIELDS = ["codepoints", "combining_class"];
