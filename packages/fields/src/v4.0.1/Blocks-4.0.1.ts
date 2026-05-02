/**
 * Parsed row from `Blocks-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/Blocks-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/Blocks-4.0.1.txt#L17
 *
 * @unicodeVersion 4.0.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:29.854Z
 */
export interface Blocks401 {
  /**
   * ..End Code; Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/Blocks-4.0.1.txt#L17
   */
  start_code: string;

  /**
   * Start Code..End Code; Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/Blocks-4.0.1.txt#L17
   */
  end_code: string;

  /**
   * Name of the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/Blocks-4.0.1.txt#L17
   */
  block_name: string;
}

export const BLOCKS_401_FIELDS = ["start_code", "end_code", "block_name"];
