/**
 * Parsed row from `PropertyAliases.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyAliases.txt#L20
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyAliases.txt#L22
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyAliases.txt#L24
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:57.681Z
 */
export interface PropertyAliases {
  /**
   * The first field is an abbreviated name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyAliases.txt#L20
   */
  abbreviated_name: string;

  /**
   * The second field is a long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyAliases.txt#L22
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyAliases.txt#L24
   */
  additional_aliases: string[];
}

export const PROPERTY_ALIASES_FIELDS = ["abbreviated_name", "long_name", "additional_aliases"];
