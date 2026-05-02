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
 * @generated 2026-04-28T04:57:56.193Z
 */
export interface Blocks2 {
  /**
   * Start Code of the Unicode block range.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Blocks-2.txt#L1
   */
  start_code: string;

  /**
   * End Code of the Unicode block range.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Blocks-2.txt#L1
   */
  end_code: string;

  /**
   * Name of the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.1-Update4/Blocks-2.txt#L1
   */
  block_name: string;
}

export const BLOCKS_2_FIELDS = ["start_code", "end_code", "block_name"];
