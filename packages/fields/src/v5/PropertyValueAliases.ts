/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L22
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L25
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L28
 *
 * @unicodeVersion 5
 * @fields 3
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:46.013Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L22
   */
  property: string;

  /**
   * An abbreviated name. If none available, marked with 'n/a'.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L25
   */
  abbreviated_name: string;

  /**
   * A long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L28
   */
  long_name: string;
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbreviated_name", "long_name"];
