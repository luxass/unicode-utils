/**
 * Parsed row from `VerticalOrientation.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/VerticalOrientation.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/VerticalOrientation.txt#L15-L22
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/VerticalOrientation.txt#L70-L73
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:38.190Z
 */
export interface VerticalOrientation {
  /**
   * Unicode code point value or range of code point values in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/VerticalOrientation.txt#L15-L17
   */
  code_point: string;

  /**
   * Vertical_Orientation property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/VerticalOrientation.txt#L18-L22
   */
  vertical_orientation: "U" | "R" | "Tu" | "Tr";

  /**
   * Comments following the number sign listing General_Category property value or L& alias of LC, Unicode character name or names, and code point count in square brackets for ranges.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/VerticalOrientation.txt#L70-L73
   */
  comment: string;
}

export const VERTICAL_ORIENTATION_FIELDS = ["code_point", "vertical_orientation", "comment"];
