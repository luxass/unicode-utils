/**
 * Parsed row from `PropertyAliases.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyAliases.txt#L20
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyAliases.txt#L22
 *
 * @unicodeVersion 8
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:51:53.132Z
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
}

export const PROPERTY_ALIASES_FIELDS = ["abbreviated_name", "long_name"];
