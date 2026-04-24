/**
 * Parsed row from `IndicPositionalCategory.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/IndicPositionalCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/IndicPositionalCategory.txt#L47-L48
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 1.00
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:51:17.175Z
 */
export interface IndicPositionalCategory {
  /**
   * Unicode code point value or range of code point values.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/IndicPositionalCategory.txt#L47
   */
  unicode_code_point: string;

  /**
   * Indic_Positional_Category property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/IndicPositionalCategory.txt#L48
   */
  indic_positional_category: string;
}

export const INDIC_POSITIONAL_CATEGORY_FIELDS = ["unicode_code_point", "indic_positional_category"];
