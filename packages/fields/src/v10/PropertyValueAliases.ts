/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 10).
 *
 * @see https://unicode.org/Public/10.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/PropertyValueAliases.txt#L20-L25
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/PropertyValueAliases.txt#L27
 * - https://ucdjs.dev/file-explorer/v/10.0.0/ucd/PropertyValueAliases.txt#L32
 *
 * @unicodeVersion 10
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:47:05.011Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/PropertyValueAliases.txt#L20-L24
   */
  property: string;

  /**
   * An abbreviated name.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/PropertyValueAliases.txt#L25
   */
  abbreviated_name: string;

  /**
   * A long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/PropertyValueAliases.txt#L27
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/10.0.0/ucd/PropertyValueAliases.txt#L32
   */
  additional_alias: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbreviated_name", "long_name", "additional_alias"];
