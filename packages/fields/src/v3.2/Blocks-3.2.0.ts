/**
 * Parsed row from `Blocks-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/Blocks-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/Blocks-3.2.0.txt#L3
 *
 * @unicodeVersion 3.2
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:56.195Z
 */
export interface Blocks320 {
  /**
   * Start Code of the Unicode block range in hexadecimal format.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/Blocks-3.2.0.txt#L3
   */
  start_code: string;

  /**
   * End Code of the Unicode block range in hexadecimal format.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/Blocks-3.2.0.txt#L3
   */
  end_code: string;

  /**
   * Name assigned to the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/Blocks-3.2.0.txt#L3
   */
  block_name: string;
}

export const BLOCKS_320_FIELDS = ["start_code", "end_code", "block_name"];
