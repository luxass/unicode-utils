/**
 * Parsed row from `extracted/DerivedCombiningClass-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedCombiningClass-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedCombiningClass-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:48.507Z
 */
export interface ExtractedDerivedCombiningClass400 {
  /**
   * Unicode code point or range with derived Canonical Combining Class.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedCombiningClass-4.0.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * Canonical_Combining_Class value; defaults to 0 for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedCombiningClass-4.0.0.txt#L13-L16
   */
  ccc: number;
}

export const EXTRACTED_DERIVED_COMBINING_CLASS_400_FIELDS = ["code_point_range", "ccc"];
