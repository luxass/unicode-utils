/**
 * Parsed row from `Props-2.0.14.txt` (Unicode 2).
 *
 * @see https://unicode.org/Public/2.0-Update/Props-2.0.14.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/2.0-Update/Props-2.0.14.txt#L1
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:40.076Z
 */
export interface Props2014 {
  /**
   * Unicode code point or range (first field in standard binary property files).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * Alphabetic property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Props-2.0.14.txt#L1
   */
  alphabetic: "Y" | "N";
}

export const PROPS_2014_FIELDS = ["codepoint_range", "alphabetic"];
