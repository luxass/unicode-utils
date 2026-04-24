/**
 * Parsed row from `NameAliases.txt` (Unicode 6.3).
 *
 * @see https://unicode.org/Public/6.3.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.3.0/ucd/NameAliases.txt#L37-L43
 *
 * @unicodeVersion 6.3
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:31:55.129Z
 */
export interface NameAliases {
  /**
   * Code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/NameAliases.txt#L37-L41
   */
  code_point: string;

  /**
   * Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/NameAliases.txt#L37-L41
   */
  alias: string;

  /**
   * Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.3.0/ucd/NameAliases.txt#L37-L43
   */
  type: "correction" | "control" | "alternate" | "figment" | "abbreviation";
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
