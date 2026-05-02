/**
 * Parsed row from `IndicMatraCategory.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/IndicMatraCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/IndicMatraCategory.txt#L54-L55
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/IndicMatraCategory.txt#L57-L60
 *
 * @unicodeVersion 7
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:04.046Z
 */
export interface IndicMatraCategory {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/IndicMatraCategory.txt#L54
   */
  codepoints: string;

  /**
   * Indic_Matra_Category property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/IndicMatraCategory.txt#L55
   */
  indic_matra_category: string;

  /**
   * Comment field starting with '#', showing General_Category, Unicode character name(s), and code point count.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/IndicMatraCategory.txt#L57-L60
   */
  comments: string;
}

export const INDIC_MATRA_CATEGORY_FIELDS = ["codepoints", "indic_matra_category", "comments"];
