/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:22:32.462Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Code point range for which the General_Category value applies.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  range: string;

  /**
   * Value of the General_Category property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category:
    | "Cn"
    | "Lu"
    | "Ll"
    | "Lt"
    | "Lm"
    | "Lo"
    | "Mn"
    | "Me"
    | "Mc"
    | "Nd"
    | "Nl"
    | "No"
    | "Zs"
    | "Zl"
    | "Zp"
    | "Cc"
    | "Cf"
    | "Cs"
    | "Co"
    | "Cn"
    | (string & {});
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["range", "general_category"];
