/**
 * Parsed row from `PropertyValueAliases-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/PropertyValueAliases-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L17-L22
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L24
 *
 * @unicodeVersion 4
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:43.440Z
 */
export interface PropertyValueAliases400 {
  /**
   * The property for which that property value name is used. 'qc' stands for any quick-check property.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L17-L20
   */
  property: string;

  /**
   * Abbreviated name. 'n/a' if no abbreviated name available.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L21-L22
   */
  abbrev_name: string;

  /**
   * Long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyValueAliases-4.0.0.txt#L24
   */
  long_name: string;
}

export const PROPERTY_VALUE_ALIASES_400_FIELDS = ["property", "abbrev_name", "long_name"];
