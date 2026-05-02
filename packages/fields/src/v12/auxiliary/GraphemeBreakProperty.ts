/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:46:48.698Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Code point or range for which the Grapheme_Cluster_Break property is explicitly listed.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Grapheme_Cluster_Break property value; unlisted code points default to Other.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  grapheme_cluster_break: "Other" | "XX" | "CR" | "LF" | "Control" | "Extend" | "ZWJ" | "RI" | "E_Base" | "E_Modifier" | "GLM" | "Prepend" | "SpacingMark" | "L" | "V" | "T" | "LV" | "LVT";
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point_range", "grapheme_cluster_break"];
