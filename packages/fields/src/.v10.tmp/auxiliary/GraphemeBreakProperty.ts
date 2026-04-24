/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L17
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:42.859Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point range (e.g. 0000..10FFFF).
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L17
   */
  code_point_range: string;

  /**
   * Grapheme_Cluster_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12
   */
  grapheme_cluster_break: "Other";
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point_range", "grapheme_cluster_break"];
