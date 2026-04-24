/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/auxiliary/GraphemeBreakProperty.txt#L17
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:13.566Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * @missing: 0000..10FFFF; Other.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/auxiliary/GraphemeBreakProperty.txt#L17
   */
  code_point_range: string;

  /**
   * Grapheme_Cluster_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12
   */
  grapheme_cluster_break: "Other";
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = [
  "code_point_range",
  "grapheme_cluster_break",
];
