/**
 * Parsed row from `DerivedDecompositionType-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedDecompositionType-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:55:34.653Z
 */
export interface DerivedDecompositionType310 {
  /**
   * Unicode code point or range as first field in derived property files.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Decomposition Type (from UnicodeData.txt, field 5: see UnicodeData.html)
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  decomposition_type: string;
}

export const DERIVED_DECOMPOSITION_TYPE_310_FIELDS = ["codepoint_range", "decomposition_type"];
