/**
 * Parsed row from `extracted/DerivedGeneralCategory-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/extracted/DerivedGeneralCategory-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:55:27.582Z
 */
export interface ExtractedDerivedGeneralCategory320 {
  /**
   * Unicode code point range.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  codepoint_range: string;

  /**
   * General Category value from UnicodeData.txt field 2.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  general_category: "Lu" | "Ll" | "Lt" | "Lm" | "Lo" | "Mn" | "Me" | "Mc" | "Nd" | "Nl" | "No" | "Zs" | "Zl" | "Zp" | "Cc" | "Cf" | "Cs" | "Co" | "Cn" | (string & {});
}

export const EXTRACTED_DERIVED_GENERAL_CATEGORY_320_FIELDS = ["codepoint_range", "general_category"];
