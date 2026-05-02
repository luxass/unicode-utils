/**
 * Parsed row from `Blocks-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/Blocks-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/Blocks-4.0.0.txt#L8
 *
 * @unicodeVersion 4
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:54:24.862Z
 */
export interface Blocks400 {
  /**
   * Start Code of the Unicode block range in hexadecimal.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/Blocks-4.0.0.txt#L8
   */
  start_code: string;

  /**
   * End Code of the Unicode block range in hexadecimal.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/Blocks-4.0.0.txt#L8
   */
  end_code: string;

  /**
   * Name of the Unicode block.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/Blocks-4.0.0.txt#L8
   */
  block_name: string;
}

export const BLOCKS_400_FIELDS = ["start_code", "end_code", "block_name"];
