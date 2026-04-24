/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 4.1).
 *
 * @see https://unicode.org/Public/4.1.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L22
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L25
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L28
 * - https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L33
 *
 * @unicodeVersion 4.1
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-23T18:54:34.746Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L22
   */
  property: string;

  /**
   * Abbreviated name; 'n/a' if none.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L25
   */
  abbrev_name: string;

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L28
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.1.0/ucd/PropertyValueAliases.txt#L33
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbrev_name", "long_name", "additional_aliases"];
