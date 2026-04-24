/**
 * Parsed row from `NameAliases.txt` (Unicode 8).
 *
 * @see https://unicode.org/Public/8.0.0/ucd/NameAliases.txt
 *
 * Fields derived from:
 * - https://ucdjs.dev/file-explorer/v/8.0.0/ucd/NameAliases.txt#L47-L49
 *
 * @unicodeVersion 8
 * @fields 3
 * @confidence 0.90
 * @model grok-4-1-fast-non-reasoning
 * @generated 2026-04-24T04:25:40.370Z
 */
export interface NameAliases {
  /**
   * First field: Code point.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/NameAliases.txt#L47
   */
  code_point: string;

  /**
   * Second field: Alias.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/NameAliases.txt#L48
   */
  alias: string;

  /**
   * Third field: Type.
   *
   * @source https://ucdjs.dev/file-explorer/v/8.0.0/ucd/NameAliases.txt#L49
   */
  type: "correction" | "control" | "alternate" | "figment" | "abbreviation";
}

export const NAME_ALIASES_FIELDS = ["code_point", "alias", "type"];
