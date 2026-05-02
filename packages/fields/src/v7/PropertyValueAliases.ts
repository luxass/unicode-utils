/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 7).
 *
 * @see https://unicode.org/Public/7.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L21-L27
 * - https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L31
 *
 * @unicodeVersion 7
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:50:13.129Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L21-L23
   */
  property: string;

  /**
   * An abbreviated name.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L24-L25
   */
  abbreviated_name: string;

  /**
   * A long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L26-L27
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/7.0.0/ucd/PropertyValueAliases.txt#L31
   */
  additional_alias: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbreviated_name", "long_name", "additional_alias"];
