/**
 * Parsed row from `VerticalOrientation.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/VerticalOrientation.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/VerticalOrientation.txt#L16-L22
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:48:56.652Z
 */
export interface VerticalOrientation {
  /**
   * Unicode code point value or range of code point values in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/VerticalOrientation.txt#L16-L17
   */
  code_point: string;

  /**
   * Vertical_Orientation property value: U=Upright, R=Rotated 90 degrees clockwise compared to the code charts, Tu=Transformed typographically with fallback to Upright, Tr=Transformed typographically with fallback to Rotated.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/VerticalOrientation.txt#L18-L22
   */
  vertical_orientation: "U" | "R" | "Tu" | "Tr";
}

export const VERTICAL_ORIENTATION_FIELDS = ["code_point", "vertical_orientation"];
