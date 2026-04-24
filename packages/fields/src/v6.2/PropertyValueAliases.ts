/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 6.2).
 *
 * @see https://unicode.org/Public/6.2.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/PropertyValueAliases.txt#L21-L22
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/PropertyValueAliases.txt#L24-L29
 * - https://ucdjs.dev/file-explorer/v/6.2.0/ucd/PropertyValueAliases.txt#L31
 *
 * @unicodeVersion 6.2
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:53:30.314Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/PropertyValueAliases.txt#L21-L22
   */
  property: string;

  /**
   * Abbreviated name (numeric for ccc).
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/PropertyValueAliases.txt#L24-L29
   */
  abbreviated_name: string;

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/PropertyValueAliases.txt#L26
   */
  long_name: string;

  /**
   * Additional aliases beyond the preferred ones.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.2.0/ucd/PropertyValueAliases.txt#L31
   */
  additional_alias: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbreviated_name", "long_name", "additional_alias"];
