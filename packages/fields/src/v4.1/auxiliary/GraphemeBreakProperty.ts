/**
 * Parsed row from `auxiliary/GraphemeBreakProperty.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/auxiliary/GraphemeBreakProperty.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:37.146Z
 */
export interface AuxiliaryGraphemeBreakProperty {
  /**
   * Code point range in standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Grapheme_Cluster_Break property value; defaults to Other for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/auxiliary/GraphemeBreakProperty.txt#L11-L14
   */
  grapheme_cluster_break:
    | "Other"
    | "Control"
    | "CR"
    | "Extend"
    | "L"
    | "LF"
    | "Prepend"
    | "Regional_Indicator"
    | "SpacingMark"
    | "T"
    | (string & {});
}

export const AUXILIARY_GRAPHEME_BREAK_PROPERTY_FIELDS = ["code_point", "grapheme_cluster_break"];
