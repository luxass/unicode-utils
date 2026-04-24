/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12-L15
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:54:03.735Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Grapheme_Cluster_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L14
   */
  code_point: string;

  /**
   * Grapheme Cluster Break property value; Other (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L12-L15
   */
  grapheme_cluster_break: "Other" | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point", "grapheme_cluster_break"];
