/**
 * Parsed row from `Blocks-2.txt` (Unicode 2.1.9).
 *
 * @see https://unicode.org/Public/2.1-Update4/Blocks-2.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/2.1-Update4/Blocks-2.txt#L1
 *
 * @unicodeVersion 2.1.9
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:37.059Z
 */
export interface Blocks2 {
  /**
   * Start Code
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Blocks-2.txt#L1
   */
  start_code: string;

  /**
   * End Code
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Blocks-2.txt#L1
   */
  end_code: string;

  /**
   * Block Name
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Blocks-2.txt#L1
   */
  block_name: string;
}

export const BLOCKS_2_FIELDS = ["start_code", "end_code", "block_name"];
