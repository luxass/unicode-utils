/**
 * Parsed row from `DerivedCoreProperties.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/DerivedCoreProperties.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/reports/tr44/
 *
 * @unicodeVersion 6.3
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-24T04:32:08.882Z
 */
export interface DerivedCoreProperties {
  /**
   * Unicode code point or range in hexadecimal.
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  code_point: string;

  /**
   * Name of the derived core property (binary, indicating membership).
   *
   * @source https://ucdjs.dev/reports/tr44/
   */
  property_value:
    | "ID_Start"
    | "Uppercase"
    | "Lowercase"
    | "XID_Start"
    | "XID_Continue"
    | "Math"
    | "Default_Ignorable_Code_Point";
}

export const DERIVED_CORE_PROPERTIES_FIELDS = ["code_point", "property_value"];
