/**
 * Parsed row from `PropertyAliases-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/PropertyAliases-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/PropertyAliases-4.0.1.txt#L18-L24
 *
 * @unicodeVersion 4.0.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:12.411Z
 */
export interface PropertyAliases401 {
  /**
   * The first field is an abbreviated name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/PropertyAliases-4.0.1.txt#L18-L20
   */
  abbreviated_name: string;

  /**
   * The second field is a long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/PropertyAliases-4.0.1.txt#L18-L22
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/PropertyAliases-4.0.1.txt#L18-L24
   */
  additional_aliases: string[];
}

export const PROPERTY_ALIASES_401_FIELDS = ["abbreviated_name", "long_name", "additional_aliases"];
