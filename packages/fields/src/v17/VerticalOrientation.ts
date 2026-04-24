/**
 * Parsed row from `VerticalOrientation.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/VerticalOrientation.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/VerticalOrientation.txt#L15-L22
 * - https://ucdjs.dev/file-explorer/v/17.0.0/ucd/VerticalOrientation.txt#L72-L75
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:16:28.778Z
 */
export interface VerticalOrientation {
  /**
   * Unicode code point value or range of code point values in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/VerticalOrientation.txt#L15-L17
   */
  codepoints: string;

  /**
   * Vertical_Orientation property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/VerticalOrientation.txt#L18-L22
   */
  vertical_orientation: "U" | "R" | "Tu" | "Tr";

  /**
   * Comments following the number sign listing General_Category property value or L& alias, Unicode character name or names, and code point count for ranges.
   *
   * @source https://ucdjs.dev/file-explorer/v/17.0.0/ucd/VerticalOrientation.txt#L72-L75
   */
  comments: string;
}

export const VERTICAL_ORIENTATION_FIELDS = ["codepoints", "vertical_orientation", "comments"];
