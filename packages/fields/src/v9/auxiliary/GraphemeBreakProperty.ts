/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12-L15
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:54.453Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Grapheme_Cluster_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L14
   */
  code_point_range: string;

  /**
   * Grapheme_Cluster_Break property value; unlisted code points default to Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12-L15
   */
  grapheme_cluster_break: "Other" | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point_range", "grapheme_cluster_break"];
