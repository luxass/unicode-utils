/**
 * Parsed row from `CJKRadicals.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CJKRadicals.txt#L18-L20
 *
 * @unicodeVersion 9
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:10.313Z
 */
export interface CjkRadicals {
  /**
   * fields, separated by a semicolon (';').
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CJKRadicals.txt#L18
   */
  cjk_radical_number: string;

  /**
   * The CJK radical character.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CJKRadicals.txt#L19
   */
  cjk_radical_character: string;

  /**
   * The CJK unified ideograph.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/CJKRadicals.txt#L20
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = ["cjk_radical_number", "cjk_radical_character", "cjk_unified_ideograph"];
