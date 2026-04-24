/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L21-L26
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L31
 *
 * @unicodeVersion 8
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:52:56.381Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L21-L23
   */
  property: string;

  /**
   * Abbreviated name.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L24-L25
   */
  abbreviated_name: string;

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L26
   */
  long_name: string;

  /**
   * Additional aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/PropertyValueAliases.txt#L31
   */
  additional_alias: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "abbreviated_name",
  "long_name",
  "additional_alias",
];
