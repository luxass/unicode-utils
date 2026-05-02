/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:51:25.058Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point or range of code points.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Grapheme_Cluster_Break property value; unlisted code points default to Other.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  grapheme_cluster_break: string;
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point", "grapheme_cluster_break"];
