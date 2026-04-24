/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 14).
 *
 * @see https://unicode.org/Public/14.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 14
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:48:20.448Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point or range in standard UCD format.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Derived Property: Math.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  math: "Y" | "N";

  /**
   * Optional reserved field (usually empty).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  reserved: string;
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point", "math", "reserved"];
