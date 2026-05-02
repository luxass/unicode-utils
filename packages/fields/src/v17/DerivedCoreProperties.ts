/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 17).
 *
 * @see https://unicode.org/Public/17.0.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 17
 * @fields 3
 * @confidence 0.70
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-28T04:41:58.739Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point or range in hexadecimal notation.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Name of the derived core binary property such as Math.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property: string;

  /**
   * Binary property value: Y if true, N if false.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  value: "Y" | "N";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point", "property", "value"];
