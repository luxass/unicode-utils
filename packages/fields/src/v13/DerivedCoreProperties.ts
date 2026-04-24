/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/DerivedCoreProperties.txt#L12-L13
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 13
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:01.719Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point or range (first field in standard UCD format).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Derived Property: Math. Generated from: Sm + Other_Math.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/DerivedCoreProperties.txt#L12-L13
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point", "math"];
