/**
 * Parsed row from `PropertyAliases.txt` (Unicode 16).
 *
 * @see https://unicode.org/Public/16.0.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/PropertyAliases.txt#L21-L25
 * - https://ucdjs.dev/file-explorer/v/16.0.0/ucd/PropertyAliases.txt#L27-L28
 *
 * @unicodeVersion 16
 * @fields 2
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T03:55:29.029Z
 */
export interface PropertyAliases {
  /**
   * The first field is the short name for the property. It is typically an abbreviation, but in a number of cases it is simply a duplicate of the "long name" in the second field.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/PropertyAliases.txt#L21-L25
   */
  short_name: string;

  /**
   * The second field is the long name for the property, typically the formal name used in documentation about the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/16.0.0/ucd/PropertyAliases.txt#L27-L28
   */
  long_name: string;
}

export const PROPERTY_ALIASES_FIELDS = ["short_name", "long_name"];
