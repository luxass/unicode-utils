/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L16
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:20.378Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * @missing: 0000..10FFFF; Other.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L16
   */
  code_point_range: string;

  /**
   * Grapheme_Cluster_Break property value; defaults to Other (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
   */
  grapheme_cluster_break: "Other" | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = [
  "code_point_range",
  "grapheme_cluster_break",
];
