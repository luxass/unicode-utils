/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
 *
 * @unicodeVersion 5
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:29:25.864Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point or range explicitly listed for Grapheme_Cluster_Break.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
   */
  code_point: string;

  /**
   * Grapheme cluster break property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
   */
  grapheme_cluster_break: "Other" | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point", "grapheme_cluster_break"];
