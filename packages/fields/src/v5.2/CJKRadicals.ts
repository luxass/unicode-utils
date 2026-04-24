/**
 * Parsed row from `CJKRadicals.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/CJKRadicals.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CJKRadicals.txt#L17-L20
 *
 * @unicodeVersion 5.2
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:33:03.241Z
 */
export interface CjkRadicals {
  /**
   * The radical number.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CJKRadicals.txt#L17-L20
   */
  radical_number: string;

  /**
   * The CJK Radical character.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CJKRadicals.txt#L17-L20
   */
  cjk_radical_character: string;

  /**
   * The CJK Unified Ideograph.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/CJKRadicals.txt#L17-L20
   */
  cjk_unified_ideograph: string;
}

export const CJK_RADICALS_FIELDS = [
  "radical_number",
  "cjk_radical_character",
  "cjk_unified_ideograph",
];
