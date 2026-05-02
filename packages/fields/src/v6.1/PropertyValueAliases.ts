/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L21-L22
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L24
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L26
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L31
 *
 * @unicodeVersion 6.1
 * @fields 4
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:01.547Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L21-L22
   */
  property: string;

  /**
   * An abbreviated name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L24
   */
  abbreviated_name: string;

  /**
   * A long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L26
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/PropertyValueAliases.txt#L31
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbreviated_name", "long_name", "additional_aliases"];
