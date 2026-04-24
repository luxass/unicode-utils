/**
 * Parsed row from `PropertyAliases.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyAliases.txt#L18-L24
 *
 * @unicodeVersion 6.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:27:17.613Z
 */
export interface PropertyAliases {
  /**
   * The first field is an abbreviated name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyAliases.txt#L18-L20
   */
  abbreviated_name: string;

  /**
   * The second field is a long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyAliases.txt#L18-L22
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyAliases.txt#L18-L24
   */
  additional_aliases: string[];
}

export const PROPERTY_ALIASES_FIELDS = ["abbreviated_name", "long_name", "additional_aliases"];
