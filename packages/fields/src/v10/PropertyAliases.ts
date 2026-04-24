/**
 * Parsed row from `PropertyAliases.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/PropertyAliases.txt#L21
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/PropertyAliases.txt#L23
 *
 * @unicodeVersion 10
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:21:31.606Z
 */
export interface PropertyAliases {
  /**
   * The first field is an abbreviated name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/PropertyAliases.txt#L21
   */
  abbreviated_name: string;

  /**
   * The second field is a long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/PropertyAliases.txt#L23
   */
  long_name: string;
}

export const PROPERTY_ALIASES_FIELDS = ["abbreviated_name", "long_name"];
