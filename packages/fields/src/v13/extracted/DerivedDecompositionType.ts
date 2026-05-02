/**
 * Parsed row from `extracted/DerivedDecompositionType.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/extracted/DerivedDecompositionType.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:45:05.327Z
 */
export interface ExtractedDerivedDecompositionType {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Decomposition type property value from UnicodeData.txt field 5, as documented in UAX #44.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type: string;
}

export const EXTRACTED_DERIVED_DECOMPOSITION_TYPE_FIELDS = ["code_point", "decomposition_type"];
