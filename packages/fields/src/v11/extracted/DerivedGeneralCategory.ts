/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:22:09.396Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point range in hexadecimal notation, such as 0000..007F or a single code point like 0080.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * General_Category property value (short alias).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category:
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
    | "Pc"
    | "Pd"
    | "Ps"
    | "Pe"
    | "Pi"
    | "Pf"
    | "Po"
    | "Sm"
    | "Sc"
    | "Sk"
    | "So"
    | "Zs"
    | "Zl"
    | "Zp"
    | "Cc"
    | "Cf"
    | "Cs"
    | "Co"
    | "Cn";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point_range", "general_category"];
