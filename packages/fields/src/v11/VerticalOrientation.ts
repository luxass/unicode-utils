/**
 * Parsed row from `VerticalOrientation.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/VerticalOrientation.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/VerticalOrientation.txt#L15-L23
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/VerticalOrientation.txt#L67-L70
 *
 * @unicodeVersion 11
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:08.131Z
 */
export interface VerticalOrientation {
  /**
   * Unicode code point value or range of code point values in hexadecimal form.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/VerticalOrientation.txt#L15-L17
   */
  codepoints: string;

  /**
   * Vertical_Orientation property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/VerticalOrientation.txt#L15-L23
   */
  vertical_orientation: "U" | "R" | "Tu" | "Tr";

  /**
   * Comments listing General_Category property value or L& alias, Unicode character name(s), and code point count.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/VerticalOrientation.txt#L67-L70
   */
  comments: string;
}

export const VERTICAL_ORIENTATION_FIELDS = ["codepoints", "vertical_orientation", "comments"];
