/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedLineBreak.txt#L12-L15
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedLineBreak.txt#L17-L60
 *
 * @unicodeVersion 15
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:10.677Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * Property: Line_Break All code points not explicitly listed for Line_Break have the value Unknown (XX).
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedLineBreak.txt#L12-L15
   */
  codepoint_range: string;

  /**
   * @missing: 0000..10FFFF; Unknown 20A0..20CF Currency_Symbols @missing: 20A0..20CF; Prefix_Numeric 3400..4DBF CJK_Unified_Ideographs_Extension_A @missing: 3400..4DBF; Ideographic...
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/extracted/DerivedLineBreak.txt#L17-L60
   */
  line_break: "Unknown" | "Prefix_Numeric" | "Ideographic" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["codepoint_range", "line_break"];
