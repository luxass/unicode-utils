/**
 * Parsed row from `extracted/DerivedGeneralCategory-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedGeneralCategory-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedGeneralCategory-4.0.0.txt#L13-L16
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:58.947Z
 */
export interface ExtractedDerivedGeneralCategory400 {
  /**
   * Code point or range explicitly listed with General Category value other than default Cn.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedGeneralCategory-4.0.0.txt#L13-L16
   */
  code_point_range: string;

  /**
   * Derived General Category property value; defaults to Cn for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/extracted/DerivedGeneralCategory-4.0.0.txt#L13-L16
   */
  general_category: string;
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_400_FIELDS = [
  "code_point_range",
  "general_category",
];
