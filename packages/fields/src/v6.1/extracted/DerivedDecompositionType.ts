/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:55:36.453Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decomposition type property value from UnicodeData.txt field 5.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type: string;
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
