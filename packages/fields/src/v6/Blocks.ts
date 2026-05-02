/**
 * Parsed row from `Blocks.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/Blocks.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/Blocks.txt#L12-L13
 *
 * @unicodeVersion 6
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:39.080Z
 */
export interface Blocks {
  /**
   * Start Code of the Unicode code point range in hexadecimal format.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/Blocks.txt#L12-L13
   */
  start_code: string;

  /**
   * End Code of the Unicode code point range in hexadecimal format.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/Blocks.txt#L12-L13
   */
  end_code: string;

  /**
   * Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/Blocks.txt#L12-L13
   */
  block_name: string;
}

export const BLOCKS_FIELDS = ["start_code", "end_code", "block_name"];
