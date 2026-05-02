/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:53:49.199Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Code point or code point range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Grapheme_Cluster_Break property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  grapheme_cluster_break: string;
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point", "grapheme_cluster_break"];
