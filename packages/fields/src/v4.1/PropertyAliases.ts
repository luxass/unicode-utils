/**
 * Parsed row from `PropertyAliases.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyAliases.txt#L18-L22
 *
 * @unicodeVersion 4.1
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:20.192Z
 */
export interface PropertyAliases {
  /**
   * The first field is an abbreviated name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyAliases.txt#L18-L20
   */
  abbreviated_name: string;

  /**
   * The second field is a long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyAliases.txt#L18-L22
   */
  long_name: string;
}

export const PROPERTY_ALIASES_FIELDS = ["abbreviated_name", "long_name"];
