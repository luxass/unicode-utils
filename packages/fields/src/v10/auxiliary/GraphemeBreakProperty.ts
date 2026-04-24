/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 * - https://ucdjs.dev/reports/tr29/
 *
 * @unicodeVersion 10
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:56.705Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Unicode code point or range (e.g. 0020 or 0020..002F).
   *
   * @source https://ucdjs.dev/reports/tr44/
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
    | "LF"
    | "Extend"
    | "ZWJ"
    | "RI"
    | "Prepend"
    | "SpacingMark"
    | "L"
    | "V"
    | "T"
    | "LV"
    | "LVT"
    | "E_Base"
    | "E_Modifier"
    | "E_Base_GAZ"
    | "EBinding_Region"
    | "Hangul_Syllable"
    | "SM"
    | "Vowel"
    | "Consonant"
    | "Picto"
    | "E_Base_Ext"
    | (string & {});

  /**
   * Optional comment or empty.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  comment: string;
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = [
  "code_point",
  "grapheme_cluster_break",
  "comment",
];
