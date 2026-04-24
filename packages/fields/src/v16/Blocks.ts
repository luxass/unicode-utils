/**
 * Parsed row from `Blocks.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/Blocks.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Blocks.txt#L11
 *
 * @unicodeVersion 16
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:00:45.329Z
 */
export interface Blocks {
  /**
   * Start Code of the Unicode block range in hexadecimal format.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Blocks.txt#L11
   */
  start_code: string;

  /**
   * End Code of the Unicode block range in hexadecimal format.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Blocks.txt#L11
   */
  end_code: string;

  /**
   * Name of the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/Blocks.txt#L11
   */
  block_name: string;
}

export const BLOCKS_FIELDS = ["start_code", "end_code", "block_name"];
