/**
 * Parsed row from `PropertyAliases.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/PropertyAliases.txt#L21
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/PropertyAliases.txt#L23
 *
 * @unicodeVersion 6
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:04.406Z
 */
export interface PropertyAliases {
  /**
   * The first field is an abbreviated name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/PropertyAliases.txt#L21
   */
  abbreviated_name: string;

  /**
   * The second field is a long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/PropertyAliases.txt#L23
   */
  long_name: string;
}

export const PROPERTY_ALIASES_FIELDS = ["abbreviated_name", "long_name"];
