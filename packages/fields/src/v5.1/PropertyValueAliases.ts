/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 5.1).
 *
 * @see https://unicode.org/Public/5.1.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L22-L26
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L28
 * - https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L33
 *
 * @unicodeVersion 5.1
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:28:50.118Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which the property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L22-L24
   */
  property: string;

  /**
   * Abbreviated name (or 'n/a').
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L25-L26
   */
  abbreviated_name: string;

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L28
   */
  long_name: string;

  /**
   * Additional aliases (if any).
   *
   * @source https://ucdjs.dev/file-explorer/v/5.1.0/ucd/PropertyValueAliases.txt#L33
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "abbreviated_name",
  "long_name",
  "additional_aliases",
];
