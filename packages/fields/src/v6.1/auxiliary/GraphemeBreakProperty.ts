/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
 *
 * @unicodeVersion 6.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:26:58.179Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Grapheme_Cluster_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Grapheme_Cluster_Break property value; unlisted code points have default value Other.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
   */
  grapheme_cluster_break: "Other" | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = [
  "code_point_range",
  "grapheme_cluster_break",
];
