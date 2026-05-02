/**
 * Parsed row from `Blocks-1.txt` (Unicode 2).
 *
 * @see https://unicode.org/Public/2.0-Update/Blocks-1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/2.0-Update/Blocks-1.txt#L1
 *
 * @unicodeVersion 2
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:58:09.475Z
 */
export interface Blocks1 {
  /**
   * Start Code of the Unicode block range.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Blocks-1.txt#L1
   */
  start_code: string;

  /**
   * End Code of the Unicode block range.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Blocks-1.txt#L1
   */
  end_code: string;

  /**
   * Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Blocks-1.txt#L1
   */
  block_name: string;
}

export const BLOCKS_1_FIELDS = ["start_code", "end_code", "block_name"];
