/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:14.601Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point or range in standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  code_point: string;

  /**
   * Grapheme_Cluster_Break property value; defaults to Other (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/reports/tr29/
   */
  grapheme_cluster_break:
    | "Other"
    | "Control"
    | "CR"
    | "Extend"
    | "ExtendNumLet"
    | "E_Base"
    | "E_Base_GAZ"
    | "E_Modifier"
    | "ZWJ"
    | "RI"
    | "L"
    | "V"
    | "T"
    | "LV"
    | "LVT"
    | "Prepend"
    | "E_Base_Ext"
    | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point", "grapheme_cluster_break"];
