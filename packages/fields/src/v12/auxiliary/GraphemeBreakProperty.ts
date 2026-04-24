/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12-L15
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:05.529Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point range or single code point.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  code_point_range: string;

  /**
   * Grapheme_Cluster_Break property value; defaults to Other (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12-L15
   */
  grapheme_cluster_break: "Other" | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = [
  "code_point_range",
  "grapheme_cluster_break",
];
