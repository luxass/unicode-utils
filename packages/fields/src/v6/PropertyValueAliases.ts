/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 6).
 *
 * @see https://unicode.org/Public/6.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/PropertyValueAliases.txt#L22-L28
 * - https://ucdjs.dev/file-explorer/v/6.0.0/ucd/PropertyValueAliases.txt#L33
 *
 * @unicodeVersion 6
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:34.101Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/PropertyValueAliases.txt#L22-L24
   */
  property: string;

  /**
   * Abbreviated name. If there is no abbreviated name available, the field is marked with 'n/a'.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/PropertyValueAliases.txt#L25-L27
   */
  abbreviated_name: "n/a" | (string & {});

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/PropertyValueAliases.txt#L28
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.0.0/ucd/PropertyValueAliases.txt#L33
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbreviated_name", "long_name", "additional_aliases"];
