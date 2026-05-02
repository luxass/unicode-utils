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
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T05:10:18.576Z
 */
export interface Blocks3 {
  /**
   * Start Code.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Blocks-3.txt#L1
   */
  start_code: string;

  /**
   * End Code.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Blocks-3.txt#L1
   */
  end_code: string;

  /**
   * Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.0-Update/Blocks-3.txt#L1
   */
  block_name: string;
}

export const BLOCKS_3_FIELDS = ["start_code", "end_code", "block_name"];
