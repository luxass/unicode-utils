/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 7
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:04.346Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Code point range in the standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  code_point_range: string;

  /**
   * Grapheme_Cluster_Break property value; unlisted code points have value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
   */
  grapheme_cluster_break: "Other" | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point_range", "grapheme_cluster_break"];
