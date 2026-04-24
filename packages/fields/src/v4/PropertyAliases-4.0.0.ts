/**
 * Parsed row from `PropertyAliases-4.0.0.txt` (Unicode 4).
 *
 * @see https://unicode.org/Public/4.0-Update/PropertyAliases-4.0.0.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyAliases-4.0.0.txt#L14-L19
 *
 * @unicodeVersion 4
 * @fields 2
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:30:36.516Z
 */
export interface PropertyAliases400 {
  /**
   * The first field is an abbreviated name for the property.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyAliases-4.0.0.txt#L14-L18
   */
  abbreviated_name: string;

  /**
   * The second field is a long name.
   *
   * @source https://ucdjs.dev/file-explorer/v/4.0-Update/PropertyAliases-4.0.0.txt#L14-L19
   */
  long_name: string;
}

export const PROPERTY_ALIASES_400_FIELDS = ["abbreviated_name", "long_name"];
