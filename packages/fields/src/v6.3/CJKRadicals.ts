/**
 * Parsed row from `CJKRadicals.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L20
 *
 * @unicodeVersion 6.3
 * @fields 3
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:55.558Z
 */
export interface CjkRadicals {
  /**
   * The radical number.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L20
   */
  radical_number: string;

  /**
   * The CJK radical character.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L20
   */
  cjk_radical_character: string;

  /**
   * radical number.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/CJKRadicals.txt#L20
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
