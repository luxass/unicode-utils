/**
 * Parsed row from `PropertyValueAliases.txt` (Unicode 9).
 *
 * @see https://unicode.org/Public/9.0.0/ucd/PropertyValueAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L22-L25
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L27
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L29-L30
 * - https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L32
 *
 * @unicodeVersion 9
 * @fields 6
 * @confidence 0.80
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:49:08.336Z
 */
export interface PropertyValueAliases {
  /**
   * The property for which that property value name is used.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L22-L24
   */
  property: string;

  /**
   * An abbreviated name.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L25
   */
  abbreviated_name: string;

  /**
   * A long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L27
   */
  long_name: string;

  /**
   * For ccc, the third field is abbreviated.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L29-L30
   */
  ccc_abbreviated_name: string;

  /**
   * For ccc, the fourth field is long.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L29-L30
   */
  ccc_long_name: string;

  /**
   * Other aliases may be listed in additional fields.
   *
   * @source https://ucdjs.dev/file-explorer/v/9.0.0/ucd/PropertyValueAliases.txt#L32
   */
  additional_aliases: string[];
}

export const PROPERTY_VALUE_ALIASES_FIELDS = ["property", "abbreviated_name", "long_name", "ccc_abbreviated_name", "ccc_long_name", "additional_aliases"];
