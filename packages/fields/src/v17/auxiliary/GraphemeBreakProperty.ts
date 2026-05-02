/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:40:11.223Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Grapheme_Cluster_Break property value such as Other (XX).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  grapheme_cluster_break: "Other" | "XX" | (string & {});

  /**
   * Inline comment with additional information such as character names.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point", "grapheme_cluster_break", "comment"];
