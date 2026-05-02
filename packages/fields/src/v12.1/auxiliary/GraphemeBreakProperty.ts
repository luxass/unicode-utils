/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:45:35.194Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Hexadecimal code point or range (e.g. '0020' or '0020..007F').
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Grapheme_Cluster_Break property value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  grapheme_cluster_break: "Other" | "CR" | "LF" | "Control" | "Extend" | "Regional_Indicator" | "SpacingMark" | "L" | "V" | "T" | "LV" | "LVT" | "Prepend" | "E_Base" | "EBG" | "EM" | "ZWJ";
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point", "grapheme_cluster_break"];
