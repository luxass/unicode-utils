/**
 * Parsed row from `Blocks.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/Blocks.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/Blocks.txt#L10
 *
 * @unicodeVersion 9
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:29.764Z
 */
export interface Blocks {
  /**
   * Start Code of the Unicode block range in hexadecimal.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/Blocks.txt#L10
   */
  start_code: string;

  /**
   * End Code of the Unicode block range in hexadecimal.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/Blocks.txt#L10
   */
  end_code: string;

  /**
   * Name of the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/Blocks.txt#L10
   */
  block_name: string;
}

export const BLOCKS_FIELDS = ["start_code", "end_code", "block_name"];
