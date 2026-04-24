/**
 * Parsed row from `Blocks-3.txt` (Unicode 3).
 *
 * @see https://unicode.org/Public/3.0-Update/Blocks-3.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.0-Update/Blocks-3.txt#L1
 *
 * @unicodeVersion 3
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:42.140Z
 */
export interface Blocks3 {
  /**
   * Starting Unicode code point of the block.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Blocks-3.txt#L1
   */
  start_code: string;

  /**
   * Ending Unicode code point of the block.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Blocks-3.txt#L1
   */
  end_code: string;

  /**
   * Name of the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Blocks-3.txt#L1
   */
  block_name: string;
}

export const BLOCKS_3_FIELDS = ["start_code", "end_code", "block_name"];
