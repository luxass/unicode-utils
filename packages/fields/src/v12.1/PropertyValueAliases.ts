/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 12.1).
 *
 * @see https://unicode.org/Public/12.1.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/PropertyValueAliases.txt#L22
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/PropertyValueAliases.txt#L25
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/PropertyValueAliases.txt#L29
 * - https://ucdjs.dev/file-explorer/v/12.1.0/ucd/PropertyValueAliases.txt#L35
 *
 * @unicodeVersion 12.1
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:20:33.656Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/PropertyValueAliases.txt#L22
   */
  property: string;

  /**
   * The short name for the property value, typically an abbreviation.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/PropertyValueAliases.txt#L25
   */
  short_name: string;

  /**
   * The long name for the property value, typically the formal name used in documentation.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/PropertyValueAliases.txt#L29
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/12.1.0/ucd/PropertyValueAliases.txt#L35
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "short_name",
  "long_name",
  "additional_aliases",
];
