/**
 * Parsed row from `VerticalOrientation.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/VerticalOrientation.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/VerticalOrientation.txt#L16-L22
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/VerticalOrientation.txt#L67-L70
 *
 * @unicodeVersion 12
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:24:17.902Z
 */
export interface VerticalOrientation {
  /**
   * Unicode code point value or range of code point values in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/VerticalOrientation.txt#L16-L17
   */
  code_point: string;

  /**
   * Vertical_Orientation property value, one of the following: U - Upright, R - Rotated 90 degrees clockwise, Tu - Transformed typographically with fallback to Upright, Tr - Transformed typographically with fallback to Rotated.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/VerticalOrientation.txt#L18-L22
   */
  vertical_orientation: "U" | "R" | "Tu" | "Tr";

  /**
   * Comments following the number sign list the General_Category property value or the L& alias of the derived value LC, the Unicode character name or names, and, in lines with ranges of code points, the code point count in square brackets.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/VerticalOrientation.txt#L67-L70
   */
  comment: string;
}

export const VERTICAL_ORIENTATION_FIELDS = ["code_point", "vertical_orientation", "comment"];
