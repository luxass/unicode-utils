/**
 * Parsed row from `Unihan-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/Unihan-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/Unihan-3.2.0.txt#L30-L34
 *
 * @unicodeVersion 3.2
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:58:18.040Z
 */
export interface Unihan320 {
  /**
   * The Unicode scalar value as U+[x]xxxx (that is, there are either four or five hex digits).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/Unihan-3.2.0.txt#L30-L33
   */
  codepoint: string;

  /**
   * A tag indicating the type of information in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/Unihan-3.2.0.txt#L33-L34
   */
  tag: string;

  /**
   * The line's value (in UTF-8).
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/Unihan-3.2.0.txt#L34
   */
  value: string;
}

export const UNIHAN_320_FIELDS = ["codepoint", "tag", "value"];
