/**
 * Parsed row from `VerticalOrientation.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/VerticalOrientation.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/VerticalOrientation.txt#L15-L23
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:01:43.873Z
 */
export interface VerticalOrientation {
  /**
   * Unicode code point value or range of code point values in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/VerticalOrientation.txt#L15-L17
   */
  codepoints: string;

  /**
   * Vertical_Orientation property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/VerticalOrientation.txt#L15-L23
   */
  vertical_orientation: "U" | "R" | "Tu" | "Tr";
}

export const VERTICAL_ORIENTATION_FIELDS = ["codepoints", "vertical_orientation"];
