/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 13).
 *
 * @see https://unicode.org/Public/13.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L22-L27
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L29-L30
 * - https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L32-L33
 *
 * @unicodeVersion 13
 * @fields 5
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:33.737Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L22-L24
   */
  property: string;

  /**
   * The short name for the property value. It is typically an abbreviation, but in a number of cases it is simply a duplicate of the long name in the third field.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L25-L27
   */
  short_name: string;

  /**
   * The long name for the property value, typically the formal name used in documentation about the property value.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L29-L30
   */
  long_name: string;

  /**
   * Numeric value for Canonical_Combining_Class (ccc) cases.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L32-L33
   */
  short_name_ccc: number;

  /**
   * Long name for Canonical_Combining_Class (ccc) cases.
   *
   * @source https://ucdjs.dev/file-explorer/v/13.0.0/ucd/PropertyValueAliases.txt#L32-L33
   */
  long_name_ccc: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "short_name",
  "long_name",
  "short_name_ccc",
  "long_name_ccc",
];
