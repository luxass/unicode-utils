/**
 * Parsed row from `CJKRadicals.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L18-L21
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:24:27.971Z
 */
export interface CjkRadicals {
  /**
   * The radical number.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L18-L21
   */
  radical_number: string;

  /**
   * The CJK radical character.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L18-L21
   */
  cjk_radical_character: string;

  /**
   * The CJK unified ideograph.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/CJKRadicals.txt#L18-L21
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
