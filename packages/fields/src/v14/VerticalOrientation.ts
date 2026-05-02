/**
 * Parsed row from `VerticalOrientation.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/VerticalOrientation.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/14.0.0/ucd/VerticalOrientation.txt#L16-L22
 *
 * @unicodeVersion 14
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:45:37.736Z
 */
export interface VerticalOrientation {
  /**
   * Unicode code point value or range of code point values in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/VerticalOrientation.txt#L16-L17
   */
  code_point_range: string;

  /**
   * Vertical_Orientation property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/14.0.0/ucd/VerticalOrientation.txt#L18-L22
   */
  vertical_orientation: "U" | "R" | "Tu" | "Tr";
}

export const VERTICAL_ORIENTATION_FIELDS = ["code_point_range", "vertical_orientation"];
