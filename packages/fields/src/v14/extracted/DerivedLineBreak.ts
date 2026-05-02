/**
 * Parsed row from `extracted/DerivedLineBreak.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/extracted/DerivedLineBreak.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedLineBreak.txt#L8
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedLineBreak.txt#L12-L15
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:46:08.134Z
 */
export interface ExtractedDerivedLineBreak {
  /**
   * For documentation, see http://www.unicode.org/reports/tr44/.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedLineBreak.txt#L8
   */
  code_point: string;

  /**
   * Line_Break property value; defaults to Unknown (XX) for unlisted code points.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/extracted/DerivedLineBreak.txt#L12-L15
   */
  line_break: "Unknown" | (string & {});
}

export const EXTRACTED_DERIVED_LINE_BREAK_FIELDS = ["code_point", "line_break"];
