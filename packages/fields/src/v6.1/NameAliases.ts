/**
 * Parsed row from `NameAliases.txt` (Unicode 6.1).
 *
 * @see https://unicode.org/Public/6.1.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/6.1.0/ucd/NameAliases.txt#L37-L44
 *
 * @unicodeVersion 6.1
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-28T04:55:29.567Z
 */
export interface NameAliases {
  /**
   * Code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/NameAliases.txt#L37-L41
   */
  code_point: string;

  /**
   * Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/NameAliases.txt#L37-L41
   */
  alias: string;

  /**
   * Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/6.1.0/ucd/NameAliases.txt#L37-L44
   */
  type: "correction" | "control" | "alternate" | "figment" | "abbreviation";
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
