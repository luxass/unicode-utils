/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 11).
 *
 * @see https://unicode.org/Public/11.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/DerivedCoreProperties.txt#L8
 * - https://ucdjs.dev/file-explorer/v/11.0.0/ucd/DerivedCoreProperties.txt#L12-L13
 *
 * @unicodeVersion 11
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:50:31.950Z
 */
export interface DerivedCoreProperties {
  /**
   * For documentation, see http://www.unicode.org/reports/tr44/.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/DerivedCoreProperties.txt#L8
   */
  code_point: string;

  /**
   * Derived Property: Math generated from Sm + Other_Math.
   *
   * @source https://ucdjs.dev/file-explorer/v/11.0.0/ucd/DerivedCoreProperties.txt#L12-L13
   */
  math: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point", "math"];
