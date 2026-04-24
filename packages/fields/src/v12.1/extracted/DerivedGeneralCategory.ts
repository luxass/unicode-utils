/**
 * Parsed row from `extracted/DerivedGeneralCategory.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/extracted/DerivedGeneralCategory.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 12.1
 * @fields 2
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:52:23.466Z
 */
export interface ExtractedDerivedGeneralCategory {
  /**
   * Unicode code point or range for characters with a General_Category value.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * General_Category property value per UAX #44.
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
    | "Mc"
    | "Me"
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
    | "Cn"
    | (string & {});
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_FIELDS = ["code_point", "general_category"];
