/**
 * Parsed row from `PropertyAliases-3.2.0.txt` (Unicode 3.2).
 *
 * @see https://unicode.org/Public/3.2-Update/PropertyAliases-3.2.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/3.2-Update/PropertyAliases-3.2.0.txt#L16-L20
 *
 * @unicodeVersion 3.2
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:34.330Z
 */
export interface PropertyAliases320 {
  /**
   * The first field is an abbreviated name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/PropertyAliases-3.2.0.txt#L16-L20
   */
  first_field: string;

  /**
   * The second field is a long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/3.2-Update/PropertyAliases-3.2.0.txt#L16-L20
   */
  second_field: string;
}

export const PROPERTY_ALIASES_320_FIELDS = ["first_field", "second_field"];
