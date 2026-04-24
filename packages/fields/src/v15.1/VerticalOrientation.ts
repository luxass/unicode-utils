/**
 * Parsed row from `VerticalOrientation.txt` (Unicode 15.1).
 *
 * @see https://unicode.org/Public/15.1.0/ucd/VerticalOrientation.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.1.0/ucd/VerticalOrientation.txt#L15-L22
 *
 * @unicodeVersion 15.1
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:49:31.562Z
 */
export interface VerticalOrientation {
  /**
   * Unicode code point value or range of code point values in hexadecimal form
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/VerticalOrientation.txt#L15-L17
   */
  code_point: string;

  /**
   * Vertical_Orientation property value
   *
   * @source https://ucdjs.dev/file-explorer/v/15.1.0/ucd/VerticalOrientation.txt#L18-L22
   */
  vertical_orientation: "U" | "R" | "Tu" | "Tr";
}

export const VERTICAL_ORIENTATION_FIELDS = ["code_point", "vertical_orientation"];
