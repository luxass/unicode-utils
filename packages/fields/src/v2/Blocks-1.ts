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
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:32:50.623Z
 */
export interface Blocks1 {
  /**
   * Starting code point of the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Blocks-1.txt#L1
   */
  start_code: string;

  /**
   * Ending code point of the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Blocks-1.txt#L1
   */
  end_code: string;

  /**
   * Name of the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/2.0-Update/Blocks-1.txt#L1
   */
  block_name: string;
}

export const BLOCKS_1_FIELDS = ["start_code", "end_code", "block_name"];
