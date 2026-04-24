/**
 * Parsed row from `Blocks.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/Blocks.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/Blocks.txt#L13
 *
 * @unicodeVersion 6.2
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:24:51.602Z
 */
export interface Blocks {
  /**
   * ..End Code; Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/Blocks.txt#L13
   */
  start_code: string;

  /**
   * Start Code..End Code; Block Name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/Blocks.txt#L13
   */
  end_code: string;

  /**
   * Name of the Unicode block (casing not normative).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/Blocks.txt#L13
   */
  block_name: string;
}

export const BLOCKS_FIELDS = ["start_code", "end_code", "block_name"];
