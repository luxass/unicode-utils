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
 * @generated 2026-04-28T04:50:22.363Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Property: Grapheme_Cluster_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11
   */
  code_point: string;

  /**
   * Grapheme_Cluster_Break property value; Other (XX) for all code points not explicitly listed.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
   */
  grapheme_cluster_break: "Other" | "XX" | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point", "grapheme_cluster_break"];
