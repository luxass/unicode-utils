/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 5).
 *
 * @see https://unicode.org/Public/5.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L22-L28
 * - https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L33
 *
 * @unicodeVersion 5
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:19.649Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L22-L24
   */
  property: string;

  /**
   * An abbreviated name. If there is no abbreviated name available, the field is marked with "n/a".
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L25-L27
   */
  abbreviated_name: string;

  /**
   * A long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L28
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/5.0.0/ucd/PropertyValueAliases.txt#L33
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = [
  "property",
  "abbreviated_name",
  "long_name",
  "additional_aliases",
];
