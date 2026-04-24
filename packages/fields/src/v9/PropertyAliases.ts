/**
 * Parsed row from `PropertyAliases.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyAliases.txt#L21
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyAliases.txt#L23
 *
 * @unicodeVersion 9
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:22:54.147Z
 */
export interface PropertyAliases {
  /**
   * The first field is an abbreviated name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyAliases.txt#L21
   */
  abbreviated_name: string;

  /**
   * The second field is a long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyAliases.txt#L23
   */
  long_name: string;
}

export const PROPERTY_ALIASES_FIELDS = ["abbreviated_name", "long_name"];
