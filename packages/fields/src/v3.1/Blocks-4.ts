/**
 * Parsed row from `Blocks-4.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/Blocks-4.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.1-Update/Blocks-4.txt#L1
 *
 * @unicodeVersion 3.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:10.858Z
 */
export interface Blocks4 {
  /**
   * Start Code.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/Blocks-4.txt#L1
   */
  start_code: string;

  /**
   * End Code.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/Blocks-4.txt#L1
   */
  end_code: string;

  /**
   * Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.1-Update/Blocks-4.txt#L1
   */
  block_name: string;
}

export const BLOCKS_4_FIELDS = ["start_code", "end_code", "block_name"];
