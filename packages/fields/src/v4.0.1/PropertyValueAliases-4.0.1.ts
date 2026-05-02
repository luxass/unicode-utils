/**
 * Parsed row from `PropertyValueAliases-4.0.1.txt` (Unicode 4.0.1).
 *
 * @see https://unicode.org/Public/4.0-Update1/PropertyValueAliases-4.0.1.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/PropertyValueAliases-4.0.1.txt#L21-L27
 * - https://ucdjs.dev/file-explorer/v/4.0-Update1/PropertyValueAliases-4.0.1.txt#L32
 *
 * @unicodeVersion 4.0.1
 * @fields 4
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:53:45.155Z
 */
export interface PropertyValueAliases401 {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/PropertyValueAliases-4.0.1.txt#L21-L23
   */
  property: string;

  /**
   * An abbreviated name. If there is no abbreviated name available, the field is marked with "n/a".
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/PropertyValueAliases-4.0.1.txt#L24-L26
   */
  abbreviated_name: string;

  /**
   * A long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/PropertyValueAliases-4.0.1.txt#L27
   */
  long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update1/PropertyValueAliases-4.0.1.txt#L32
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_401_FIELDS = ["property", "abbreviated_name", "long_name", "additional_aliases"];
