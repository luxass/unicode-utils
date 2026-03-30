import type { FileParser } from "../types";

export const PROPERTY_VALUE_ALIASES_PARSER: FileParser = {
  fileName: "PropertyValueAliases",
  separator: ";",
  trimFields: true,
  stripInlineComments: true,
  fields: [
    { name: "property", type: "string-trimmed" },
    { name: "short_alias", type: "string-trimmed" },
    { name: "long_alias", type: "string-trimmed" },
    { name: "additional_alias", type: "string-trimmed", optional: true },
  ],
};
