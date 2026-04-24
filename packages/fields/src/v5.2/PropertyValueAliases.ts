/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 5.2).
 *
 * @see https://unicode.org/Public/5.2.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L22-L28
 * - https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L33
 *
 * @unicodeVersion 5.2
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:33:28.123Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L22-L24
   */
  property: string;

  /**
   * Abbreviated name; 'n/a' if none available.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L25-L27
   */
  abbrev_name: string;

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L28
   */
  long_name: string;

  /**
   * Additional aliases listed after the preferred aliases.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.2.0/ucd/PropertyValueAliases.txt#L33
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "abbrev_name",
  "long_name",
  "additional_aliases",
];
