/**
 * Parsed row from `DerivedGeneralCategory-3.1.0.txt` (Unicode 3.1).
 *
 * @see https://unicode.org/Public/3.1-Update/DerivedGeneralCategory-3.1.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.1
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:14.446Z
 */
export interface DerivedGeneralCategory310 {
  /**
   * Unicode code point range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point_range: string;

  /**
   * Derived General Category value from UnicodeData.txt field 2.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: "L" | "LC" | "Lu" | "Ll" | "Lt" | "Lm" | "Lo" | "M" | "Mn" | "Mc" | "Me" | "N" | "Nd" | "Nl" | "No" | "Z" | "Zl" | "Zp" | "Zs" | "C" | "Cc" | "Cf" | "Cs" | "Co" | "Cn";
}

export const DERIVED_GENERAL_CATEGORY_310_FIELDS = ["code_point_range", "general_category"];
