/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:19:01.500Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Hexadecimal Unicode code point or range (e.g. 0020..002E).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Value of the Grapheme_Cluster_Break property.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  grapheme_cluster_break: string;
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point", "grapheme_cluster_break"];
