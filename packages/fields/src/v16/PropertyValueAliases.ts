/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/PropertyValueAliases.txt#L22-L27
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/PropertyValueAliases.txt#L29-L30
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/PropertyValueAliases.txt#L35
 *
 * @unicodeVersion 16
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:17:03.529Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/PropertyValueAliases.txt#L22-L24
   */
  property: string;

  /**
   * The short name for the property value, typically an abbreviation.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/PropertyValueAliases.txt#L25-L27
   */
  short_name: string;

  /**
   * The long name for the property value, typically the formal name used in documentation.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/PropertyValueAliases.txt#L29-L30
   */
  long_name: string;

  /**
   * Additional aliases for the property value beyond the preferred short and long names.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/PropertyValueAliases.txt#L35
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "short_name",
  "long_name",
  "additional_aliases",
];
