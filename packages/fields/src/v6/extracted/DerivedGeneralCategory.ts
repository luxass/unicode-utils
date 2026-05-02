/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:54:17.382Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point or range in standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Abbreviated value of the General_Category property.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: "Lu" | "Ll" | "Lt" | "Lm" | "Lo" | "Mn" | "Mc" | "Me" | "Nd" | "Nl" | "No" | "Pc" | "Pd" | "Ps" | "Pe" | "Pi" | "Pf" | "Po" | "Sm" | "Sc" | "Sk" | "So" | "Zs" | "Zl" | "Zp" | "Cc" | "Cf" | "Cs" | "Co" | "Cn";
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point_range", "general_category"];
