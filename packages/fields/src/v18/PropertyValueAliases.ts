/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 18).
 *
 * @see https://unicode.org/Public/18.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/18.0.0/ucd/PropertyValueAliases.txt#L20-L33
 *
 * @unicodeVersion 18
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:42:33.730Z
 */
export interface PropertyValueAliases {
  /**
   * First field describes the property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/PropertyValueAliases.txt#L20-L24
   */
  property: string;

  /**
   * Second field is the short name for the property value. Typically an abbreviation, but for Canonical_Combining_Class (ccc) it is numeric.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/PropertyValueAliases.txt#L20-L28
   */
  short_name: unknown;

  /**
   * Third field is the long name for the property value, typically the formal name used in documentation. For ccc this is the short name.
   *
   * @source https://ucdjs.dev/file-explorer/v/18.0.0/ucd/PropertyValueAliases.txt#L20-L33
   */
  long_name: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "short_name", "long_name"];
