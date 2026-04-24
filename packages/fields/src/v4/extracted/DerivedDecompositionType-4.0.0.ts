/**
 * Parsed row from `extracted/DerivedDecompositionType-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/extracted/DerivedDecompositionType-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:30:46.820Z
 */
export interface ExtractedDerivedDecompositionType400 {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decomposition Type property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type: string;
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_400_FIELDS = ["code_point", "decomposition_type"];
