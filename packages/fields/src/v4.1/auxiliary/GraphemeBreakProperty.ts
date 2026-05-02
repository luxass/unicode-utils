/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:56:30.357Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point or range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Grapheme_Cluster_Break property value (defaults to Other for unlisted code points).
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  grapheme_cluster_break: "Other" | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point", "grapheme_cluster_break"];
