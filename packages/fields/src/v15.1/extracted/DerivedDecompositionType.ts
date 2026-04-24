/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:15:24.430Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range with non-default Decomposition_Type per UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Decomposition_Type property value (non-None).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type: string;
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = [
  "code_point_range",
  "decomposition_type",
];
