/**
 * Parsed row from `PropertyAliases.txt` (Unicode 15).
 *
 * @see https://unicode.org/Public/15.0.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/PropertyAliases.txt#L21-L25
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/PropertyAliases.txt#L27-L28
 * - https://ucdjs.dev/file-explorer/v/15.0.0/ucd/PropertyAliases.txt#L30
 *
 * @unicodeVersion 15
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-reasoning
 * @generated 2026-04-23T18:50:24.468Z
 */
export interface PropertyAliases {
  /**
   * The first field is the short name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/PropertyAliases.txt#L21-L25
   */
  short_name: string;

  /**
   * The second field is the long name for the property, typically the formal name used in documentation about the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/PropertyAliases.txt#L27-L28
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/15.0.0/ucd/PropertyAliases.txt#L30
   */
  additional_aliases: string[];
}

export const PROPERTY_ALIASES_FIELDS = ["short_name", "long_name", "additional_aliases"];
