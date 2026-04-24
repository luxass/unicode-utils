/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:22:41.745Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Hexadecimal Unicode code point or range (e.g. 0020; 0041..0049).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Grapheme Cluster Break property value such as Other.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  grapheme_cluster_break: string;
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = [
  "code_point_range",
  "grapheme_cluster_break",
];
