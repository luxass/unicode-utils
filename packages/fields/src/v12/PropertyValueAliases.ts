/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 12).
 *
 * @see https://unicode.org/Public/12.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/PropertyValueAliases.txt#L20-L30
 * - https://ucdjs.dev/file-explorer/v/12.0.0/ucd/PropertyValueAliases.txt#L35
 *
 * @unicodeVersion 12
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:48:06.350Z
 */
export interface PropertyValueAliases {
  /**
   * First field describes the property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/PropertyValueAliases.txt#L20-L24
   */
  property: string;

  /**
   * Second field is the short name for the property value. Typically an abbreviation, but in a number of cases it is simply a duplicate of the long name in the third field. For Canonical_Combining_Class it is numeric.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/PropertyValueAliases.txt#L20-L28
   */
  short_name: unknown;

  /**
   * Third field is the long name for the property value, typically the formal name used in documentation.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/PropertyValueAliases.txt#L20-L30
   */
  long_name: string;

  /**
   * Additional aliases may be listed in further fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.0.0/ucd/PropertyValueAliases.txt#L35
   */
  additional_alias: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "short_name", "long_name", "additional_alias"];
