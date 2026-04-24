/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12-L15
 *
 * @unicodeVersion 17
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:14:04.382Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Code point or range explicitly listed for Grapheme_Cluster_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L14-L15
   */
  code_point_range: string;

  /**
   * Grapheme cluster break property value; unlisted code points have default value Other (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12-L15
   */
  grapheme_cluster_break: string;
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = [
  "code_point_range",
  "grapheme_cluster_break",
];
