/**
 * Parsed row from `IndicPositionalCategory.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/IndicPositionalCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/IndicPositionalCategory.txt#L57-L63
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:20:02.235Z
 */
export interface IndicPositionalCategory {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/IndicPositionalCategory.txt#L57
   */
  code_point: string;

  /**
   * Indic_Positional_Category property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/IndicPositionalCategory.txt#L58-L63
   */
  indic_positional_category: string;
}

export const INDIC_POSITIONAL_CATEGORY_FIELDS = ["code_point", "indic_positional_category"];
