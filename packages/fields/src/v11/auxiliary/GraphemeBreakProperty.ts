/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:47:45.375Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point or range.
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
