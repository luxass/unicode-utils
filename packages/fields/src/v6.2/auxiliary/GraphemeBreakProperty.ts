/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
 *
 * @unicodeVersion 6.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:24:57.251Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point or range explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
   */
  code_point_range: string;

  /**
   * Grapheme_Cluster_Break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
   */
  grapheme_cluster_break: "Other" | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = [
  "code_point_range",
  "grapheme_cluster_break",
];
