/**
 * Parsed row from `PropertyAliases.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyAliases.txt#L19-L25
 *
 * @unicodeVersion 5.2
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:52:05.379Z
 */
export interface PropertyAliases {
  /**
   * The first field is an abbreviated name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyAliases.txt#L19-L25
   */
  property_abbrev: string;

  /**
   * The second field is a long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyAliases.txt#L19-L25
   */
  property_long: string;
}

export const PROPERTY_ALIASES_FIELDS = ["property_abbrev", "property_long"];
