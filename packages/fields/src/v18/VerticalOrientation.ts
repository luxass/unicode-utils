/**
 * Parsed row from `VerticalOrientation.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/VerticalOrientation.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/VerticalOrientation.txt#L15-L22
 *
 * @unicodeVersion 18
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:43:11.733Z
 */
export interface VerticalOrientation {
  /**
   * Unicode code point value or range of code point values in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/VerticalOrientation.txt#L15-L17
   */
  codepoints: string;

  /**
   * Vertical_Orientation property value, one of: U - Upright, the same orientation as in the code charts; R - Rotated 90 degrees clockwise compared to the code charts; Tu - Transformed typographically, with fallback to Upright; Tr - Transformed typographically, with fallback to Rotated.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/VerticalOrientation.txt#L18-L22
   */
  vertical_orientation: "U" | "R" | "Tu" | "Tr";
}

export const VERTICAL_ORIENTATION_FIELDS = ["codepoints", "vertical_orientation"];
