/**
 * Parsed row from `PropertyAliases.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/PropertyAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/PropertyAliases.txt#L18-L24
 *
 * @unicodeVersion 6.3
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:10.839Z
 */
export interface PropertyAliases {
  /**
   * The first field is an abbreviated name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/PropertyAliases.txt#L18-L20
   */
  first_field: string;

  /**
   * The second field is a long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/PropertyAliases.txt#L18-L22
   */
  second_field: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/PropertyAliases.txt#L18-L24
   */
  additional_fields: string[];
}

export const PROPERTY_ALIASES_FIELDS = ["first_field", "second_field", "additional_fields"];
